import { useQuery } from "@apollo/client";
import { Avatar, Card, Divider, Grid, List, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React, { Fragment } from "react";
import ItemList from "../cards/listItem";
import { GET_AUTHORS } from "../graphql/queries";
import spinner from "../../assets/Spinner.gif";
const Authors = () => {
  const { loading, data, errors } = useQuery(GET_AUTHORS);
  console.log("authors data: ", data);
  if (loading) {
    return <img src={spinner} />;
  }

  if (data) {
    return (
      <List
        sx={{
          width: "100%",
          marginTop: "16px",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        {data.authors.map((author) => {
          return (
            <>
              <ItemList key={author.id} author={author} />
              <Divider variant="inset" component="li" />
            </>
          );
        })}
      </List>
    );
  }
};

export default Authors;
