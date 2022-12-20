import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

import { PokedexLayout } from "../layout/PokedexLayout";
import {
  Error,
  ShowStats,
  Spinner,
  PokemonCard,
  PokemonDescripcion,
  ButtonsNavigation,
} from "../components";
import { useGetPokemonByNameQuery } from "../../store/apis";

export const PokemonPage = () => {
  const { id } = useParams();
  const {data:pokemon, isLoading, isError} = useGetPokemonByNameQuery(id);
  return (
    <PokedexLayout>
      {isLoading ? (
        <Spinner />
      ) : isError || id > 898 ? (
        <Error/>
      ) : (
        <Grid>
          <ButtonsNavigation id={pokemon.id} />
          <Grid
            container
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
            }}
            alignItems="center"
            justifyContent="center"
          >
            <Grid 
            paddingX={{ xs: 2, sm: 0, md: 0 }}
            item xs={12} sm={6}>
              <PokemonCard urlImage={pokemon.sprites.other['official-artwork']['front_default']} name={pokemon.name} />
            </Grid>
            <Grid item xs={8} sm={6} sx={{ height: "100%" }}>
              <PokemonDescripcion pokemon={pokemon} />
            </Grid>
          </Grid>
          <Grid
            paddingX={{ xs: 2, sm: 0, md: 0 }}
            sx={{
              display: "flex",
              marginTop: "1rem",
              marginBottom: "1rem",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
            width="100%"
          >
            <ShowStats stats={pokemon.stats} />
          </Grid>
        </Grid>
      )}
    </PokedexLayout>
  );
};
