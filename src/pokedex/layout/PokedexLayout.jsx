import { Grid, Typography } from "@mui/material";

import { NavBar, UserTitle } from "../components";


export const PokedexLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Grid
        container
        sx={{ marginTop: { xs: "20%", sm: "8%", md: "5%", lg: "1%" } }}
        justifyContent="center"
        direction="column"
      >
        <Grid
          alignItems="center"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <UserTitle/>
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
          {children}
        </Grid>
      </Grid>
    </>
  );
};
