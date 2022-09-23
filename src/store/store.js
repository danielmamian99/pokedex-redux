import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./apis";
import { authSlice } from "./authReducer";
import { pageSlice } from "./paginationReducer";

export const store = configureStore({
  reducer: {
    page: pageSlice.reducer,
    authentication: authSlice.reducer,
    
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});
