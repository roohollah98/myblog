import React from "react";
import { Grid, Typography, Avatar, Box } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_COMMENTS } from "../graphql/queries";
import spinner from "../../assets/Spinner.gif";

const Comments = ({slug}) => {

  const { data, loading, errors } = useQuery(GET_COMMENTS,{variables:{slug:slug}});
  if(data){console.log(data.comments)};
  return (
    <Grid
      container
      padding={2}
      mt={5}
      border="1px solid #ccc"
      sx={{
        padding: "20px",
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h5" component="h2" color="primary">
          کامنت ها
        </Typography>
      </Grid>
      {loading ? (
        <img src={spinner} />
      ) : errors ? (
        <p>somethings went wrong!</p>
      ) : (

        data.comments.map((comment)=>{
            return  <Grid
            key={comment.id}
          mt={2}
          container
          border="1px solid #ccc"
          sx={{
            padding: "20px",
            boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
            borderRadius: 4,
          }}
          xs={12}
        >
          <Box
            component="div"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar  sx={{ marginLeft: 1,bgcolor:"orange" }}  >{comment.name[0]}</Avatar>
            <Typography variant="p" component="p" color="text.primary">
              {comment.name}
            </Typography>
          </Box>
          <Grid item xs={12}>
            <Typography mt={2} variant="p" component="p" color="text.secondary">
              {comment.text}
            </Typography>
          </Grid>
        </Grid>
 
        })
             )}
    </Grid>
  );
};

export default Comments;
