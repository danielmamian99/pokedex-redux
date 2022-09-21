import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./apis";
import { pageSlice } from "./pageReducer";

export const store = configureStore({
  reducer: {
    page: pageSlice.reducer,

    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});
