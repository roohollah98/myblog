import { useQuery } from "@apollo/client";
import { Container, Grid } from "@mui/material";
import React from "react";
import BlogCard from "../cards/card";
import { GET_BLOGS_INFO } from "../graphql/queries";
import spinner from "../../assets/Spinner.gif";
const Blogs = () => {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);
  console.log(data);
  if (loading) {
    return <img src={spinner} />;
  }
  if (data) {
    return (
      <Grid mt={2} spacing={2} container>
        {data.posts.map((post) => {
          return (
            <Grid xs={12} sm={6} md={4} key={post.id} width="300px" item>
              <BlogCard
                author={post.author}
                slug={post.slug}
                title={post.title}
                cover={post.cover}
              />
            </Grid>
          );
        })}
      </Grid>
    );
  }
};

export default Blogs;
