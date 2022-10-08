import React from "react";
import { GET_BLOG } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import spinner from "../../assets/Spinner.gif";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useNavigate } from "react-router-dom";
import * as sanitizeHtml from 'sanitize-html';
import CommentForm from "../comment/CommentForm";
import Comments from "../comment/Comments";

const BlogsDetail = () => {
  const navigate=useNavigate();
  const params = useParams();

  const { loading, data, error } = useQuery(GET_BLOG, {
    variables: { BlogSlug: params.slug },
  });
  console.log(data);
  if (loading) {
    return <img src={spinner} />;
  } else if (error) {
    return <p>an error accured</p>;
  }
  return (
    <Container maxWidth="lg">
      <Grid container display="flex" flexDirection="column">
        <Grid mt={10} item xs={12} display="flex" justifyContent="space-between" alignItems="center" >
          <Typography variant="h4" component="h2" fontWeight={700} color="primary">{data.post.title}</Typography>
         

          <ArrowBackRoundedIcon onClick={()=>navigate(-1)}/>
        </Grid>
        <Grid mt={4} item xs={12}>
        <img width="100%" height="100%" style={{borderRadius:15}}  src={data.post.cover.url}/>
        </Grid>
       <Grid item mt={7} display="flex" alignItems="center">
       <Avatar
            alt={data.post.author.name}
            src={data.post.author.avatar.url}
            sx={{width:100,height:100,marginLeft:"10px"}}
          />
          <Box component="div">
            <Typography component="p" variant="h5" color="text.primary" fontWeight={700}>{data.post.author.name}</Typography>
            <Typography mt={1} component="p" variant="p" color="text.secondary">{data.post.author.field}</Typography>


          </Box>
       </Grid>
       <Grid item xs={12} mt={6}>
           <div dangerouslySetInnerHTML={{__html:sanitizeHtml( data.post.content.html)}}></div>
       </Grid>
       <Grid item xs={12}>

       <CommentForm slug={params.slug}/>

       </Grid>
       <Grid item xs={12}
       >
        <Comments slug={params.slug}/>
       </Grid>
      </Grid>
    </Container>
  );
};

export default BlogsDetail;
