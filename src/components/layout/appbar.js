import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Button, Container } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FormContext } from "../context/formcontext";
import "./layout.css";

export default function Header() {
  const navigate = useNavigate();
  const { setSignUpMode } = useContext(FormContext);

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Link
            style={{
              textDecoration: "none",
              color: "#fff",
              display: "flex",
              alignItems: "center",
            }}
            to="/"
          >
            <AutoStoriesIcon />
            <Typography
              variant="h5"
              component="h1"
              style={{ marginRight: "7px" }}
            >
              ایران بلاگ
            </Typography>
          </Link>

          <nav>
            <Button
              className="btnRegister"
              sx={{
                background: "#4d9df4",
                border: "none",
                color: "#fff",
                transition: "0.4s ease-in-out",
              }}
              variant="outlined"
              onClick={() => {
                navigate("/signInSignUp");
                setSignUpMode(true);
              }}
            >
              ثبت نام
            </Button>
            <Link
              onClick={() => {
                setSignUpMode(false);
              }}
              to="/signInSignUp"
              style={{ margin: "0 10px" }}
            >
              ورود
            </Link>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
