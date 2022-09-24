import { createSlice } from '@reduxjs/toolkit';

const init = () => {
    let page = localStorage.getItem("pokedexPage");
    page = page ? parseInt(page, 10): 1;
    return page;
  };

export const pageSlice = createSlice({
   name: 'page',
   initialState: {
        page: init(),
   },
   reducers: {
       setPage:(state,{payload}) =>{
        localStorage.setItem("pokedexPage",payload);
        state.page = payload
       },
       resetPage:(state) =>{
        localStorage.removeItem('pokedexPage')
        state.page = 1
      }
    }
});


export const { setPage, resetPage } = pageSlice.actions;