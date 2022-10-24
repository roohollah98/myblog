import { useQuery } from "@apollo/client";
import { Avatar, colors, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import { useParams, useNavigate } from "react-router-dom";
import BlogCard from "../cards/card";
import { GET_AUTHOR } from "../graphql/queries";
import spinner from "../../assets/Spinner.gif";
import * as sanitizeHtml from "sanitize-html";
const AuthorsDetail = () => {
  const params = useParams();
  const navigate = useNavigate();

  console.log(params);
  const { loading, data, error } = useQuery(GET_AUTHOR, {
    variables: { authorSlug: params.slug },
  });
  console.log("author detail", data);
  if (loading) {
    return <img src={spinner} />;
  } else if (error) {
    return <p>an error accured</p>;
  }
  return (
    <Container maxWidth="lg">
      <Grid mt={10} container>
        <ArrowBackRoundedIcon
          style={{
            position: "fixed",
            left: "50px",
            top: "70px",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        />
        <Grid
          item
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="center"
          xs={12}
        >
          <Avatar
            alt={data.author.name}
            src={data.author.avatar.url}
            sx={{ width: 250, height: 250 }}
          />
          <Typography
            mt={4}
            variant="h5"
            component="h3"
            color="text.primary"
            fontWeight="700"
          >
            {data.author.name}
          </Typography>
          <Typography mt={1} variant="p" component="p" color="text.secondary">
            {data.author.field}
          </Typography>
        </Grid>
        <Grid mt={8} item xs={12}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.author.description.html),
            }}
          ></div>
        </Grid>
        <Grid mt={6} item xs={12}>
          <Typography variant="h5" component="h3" fontWeight="700">
            مقالات {data.author.name}
          </Typography>
        </Grid>
        <Grid container spacing={2} mt={2}>
          {data.author.posts.map((post) => {
            return (
              <Grid mb={8} item xs={12} sm={6} md={4}>
                <BlogCard
                  cover={post.cover}
                  title={post.title}
                  slug={post.slug}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthorsDetail;
