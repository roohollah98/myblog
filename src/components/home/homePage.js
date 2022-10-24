import { Container, Grid, Typography } from "@mui/material";

import React from "react";
import Authors from "../authors/authors";
import Blogs from "../blogs/blogs";
import Layout from "../layout";

const HomePage = () => {
  return (
       <Layout>
    <Container  maxWidth="lg">
      <Grid container padding={3} spacing={1}  >
        <Grid  item xs={12} md={3} >
          <Typography>نویسنده ها</Typography>
          <Authors/>
        </Grid>
        <Grid  item xs={12} md={9} >
          <Typography>مقالات</Typography>
          <Blogs/>
        </Grid>
      </Grid>
    </Container>
    </Layout>
  );
};

export default HomePage;
