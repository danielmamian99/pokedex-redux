import { createSlice } from "@reduxjs/toolkit";

const initCurrentUser = () => {
  const user = localStorage.getItem("pokedexUser");
  return {
    isLogin: !!user,
    user: user,
  };
};
const initUsers = () => {
  const users = JSON.parse(localStorage.getItem("pokedexUsers"));
  return users || [];
};
export const authSlice = createSlice({
  name: "authentication",
  initialState: {
    users: initUsers(),
    currentUser: initCurrentUser(),
    loginStatus: "",
    registerStatus: "",
  },
  reducers: {
    register: (state, { payload }) => {
      const newUser = {
        user: payload.name,
        password: payload.password,
      };
      const alreadyCreate = state.users.find((user) => user?.user === newUser.user);
      if (!alreadyCreate) {
        state.users = [...state.users, newUser];
        localStorage.setItem("pokedexUsers", JSON.stringify(state.users));
        state.registerStatus = "Sucess";
      } else {
        state.registerStatus = "The user already exists";
      }
    },
    login: (state, { payload }) => {
      const loginUser = {
        user: payload.name,
        password: payload.password,
      };
      const userInStorage = state.users.find((user) => {
        return user?.user === loginUser.user
      })
      if (userInStorage) {
        if (userInStorage.password === loginUser.password) {
          state.currentUser = {
            isLogin : true,
            user: loginUser.user
          }
          localStorage.setItem("pokedexUser", loginUser.user);
          state.loginStatus = 'sucess'
        } else {
          state.loginStatus = 'Incorrect password'
        }
      } else {
        state.loginStatus = 'User does not exist'
      }
    },
    logout: (state, action) => {
      state.loginStatus= ""
      state.currentUser = {
        user: "",
        isLogin: false,
      }
      localStorage.removeItem("pokedexUser")
    },
    resetRegisterStatus: (state) =>{
      state.registerStatus = ""
    },
    resetLoginStatus: (state) =>{
      state.loginStatus = ""
    }
  },
});

export const { register, login, logout, resetRegisterStatus, resetLoginStatus } = authSlice.actions;
