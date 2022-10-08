import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";

const ItemList = ({ author }) => {
  return (
    
    <Link style={{textDecoration:"none",color:"rgba(0, 0, 0, 0.7)"}} to={`/authors/${author.slug}`}>
    <ListItem style={{textAlign:"right"}}>
      <ListItemAvatar>
        <Avatar
          alt="avatar"
          srcSet={author.avatar ? author.avatar.url : ""}
          sx={{ bgcolor: red[500] }}
          aria-label="recipe"
        ></Avatar>
      </ListItemAvatar>
      <ListItemText primary={author.name} />
    </ListItem>
    </Link>
  );
};

export default ItemList;
