import { Grid, Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../../store";

export const HomePagination = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.page);
  const handlePageChange = (event, value) => {
    dispatch(setPage(value));
  };
  return (
    <>
      <Grid
        container
        justifyContent="center"
        marginBottom={2}
        sx={{ display: { xs: "none", lg:'flex' } }}
      >
        <Pagination
          color="primary"
          onChange={handlePageChange}
          size="large"
          count={73}
          value={page}
          page={page}
          variant="outlined"
          shape="rounded"
        />
      </Grid>
      <Grid
        container
        justifyContent="center"
        marginBottom={2}
        sx={{ display: { xs: "none", md:'flex', lg:'none' } }}
      >
        <Pagination
          color="primary"
          onChange={handlePageChange}
          size="medium"
          count={73}
          value={page}
          page={page}
          variant="outlined"
          shape="rounded"
        />
      </Grid>
      <Grid
        container
        justifyContent="center"
        marginBottom={2}
        sx={{ display: { md: 'none' } }}
      >
        <Pagination
          color="primary"
          onChange={handlePageChange}
          size="small"
          count={73}
          value={page}
          page={page}
          variant="outlined"
          shape="rounded"
        />
      </Grid>
    </>
  );
};
