import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemons: builder.query({
        query: (page) => `/pokemon?limit=12&offset=${(page-1) * 12}`,
    }),
  }),
})

export const { useGetPokemonByNameQuery, useGetPokemonsQuery } = pokemonApi