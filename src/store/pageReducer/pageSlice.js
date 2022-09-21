import { createSlice } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
   name: 'page',
   initialState: {
        page: 1,
   },
   reducers: {
       setPage:(state,{payload}) =>{
        state.page = payload
       }
    }
});


export const { setPage } = pageSlice.actions;