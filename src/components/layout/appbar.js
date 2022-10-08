import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Link style={{textDecoration:"none",color:"#fff",width:"100%"}} to="/">
            <Typography variant="h5" component="h1" flex={1}>
              ایران بلاگ
            </Typography>
          </Link>

          <Link style={{ color: "#fff" }} to="/">
            <AutoStoriesIcon />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
