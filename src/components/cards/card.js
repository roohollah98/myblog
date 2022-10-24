import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Avatar from "@mui/material/Avatar";

import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Button, CardActions, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const BlogCard = ({ author, cover, title, slug }) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      {author && (
        <CardHeader
          avatar={
            <Avatar
              alt="avatar"
              srcSet={author.avatar ? author.avatar.url : ""}
              sx={{ bgcolor: red[500], marginLeft: "10px" }}
              aria-label="recipe"
            ></Avatar>
          }
          title={
            <Typography variant="p" component="p" color="text.secondary">
              {author.name}
            </Typography>
          }
        />
      )}

      <CardMedia
        component="img"
        height="200"
        image={cover.url}
        sx={{objectFit:"fill"}}
        alt="cover"
        width="100%"
      />
      <CardContent>
        <Typography
          component="h3"
          variant="h6"
          color="text.primary"
          font-fontWeight={600}
        >
          {title}
        </Typography>
      </CardContent>
      <Divider sx={{ margin: "10px" }} variant="middle" />
      <CardActions>
        <Link
          style={{ width: "100%", textDecoration: "none" }}
          to={`/blogs/${slug}`}
        >
          <Button
            onClick={() => {
              console.log("btnData", title);
            }}
            fullWidth
            variant="outlined"
          >
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
