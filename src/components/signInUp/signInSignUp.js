import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import "./signInSignUp.css";
import img1 from "../../assets/reading.svg";
import img2 from "../../assets/writer.svg";
import { FormContext } from "../context/formcontext";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
const SignInSignUp = () => {
  const { signUpMode, setSignUpMode } = useContext(FormContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const navigate = useNavigate();
  const clearValidates = () => {
    setEmailError(false);
    setUsernameError(false);
    setPasswordError(false);
  };
  const clearInputValues = () => {
    setUsername("");
    setPassword("");
    setEmail("");
  };
  const validate = () => {
    var errorMessage = "";
    if (signUpMode) {
      !username ? setUsernameError(true) : setUsernameError(false);
      !email ? setEmailError(true) : setEmailError(false);
      !password ? setPasswordError(true) : setPasswordError(false);
      if (username && password && email) {
        clearValidates();
      }
    } else {
      !username ? setUsernameError(true) : setUsernameError(false);

      !password ? setPasswordError(true) : setPasswordError(false);

      if (username && password) {
        clearValidates();
      }
    }

    console.log(errorMessage);
  };
  return (
    <Grid
      container
      className={`container ${signUpMode ? "sign-up-mode" : ""}`}
      sx={{
        minHeight: "100vh",
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        className="signInSignUp"
        sx={{
          position: "absolute",
          left: "0%",
          top: "30%",
          zIndex: 5,
          width: "50%",
          transition: "1s 0.7s ease-in-out",
        }}
      >
        <Box
          className="forms-container"
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            width: "100%",
          }}
        >
          <form sx={{ width: "100%" }} className="signInForm">
            <Typography
              sx={{ marginBottom: "10px" }}
              variant="h4"
              component="h2"
            >
              ورود به حساب کاربری
            </Typography>
            <Box variant="div" className="inputContainer">
              <TextField
                error={usernameError}
                sx={{ marginTop: "10px", width: "100%" }}
                label="نام کاربری"
                variant="outlined"
                value={username}
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Box>

            <Box variant="div" className="inputContainer">
              <TextField
                error={passwordError}
                sx={{ marginTop: "10px", width: "100%" }}
                variant="outlined"
                label="کلمه عبور"
                value={password}
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Box>

            <Button
              sx={{ marginTop: "15px", width: "50%", padding: "15px,20px" }}
              variant="contained"
              onClick={() => validate()}
            >
              ورود
            </Button>
          </form>
          <form className="SignUpForm">
            <Typography
              sx={{ marginBottom: "10px" }}
              variant="h4"
              component="h2"
            >
              ایجاد حساب کاربری
            </Typography>
            <Box variant="div" className="inputContainer">
              <TextField
                error={usernameError}
                sx={{ marginTop: "10px", width: "100%" }}
                label="نام کاربری"
                variant="outlined"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Box>
            <Box variant="div" className="inputContainer">
              <TextField
                error={emailError}
                sx={{ marginTop: "10px", width: "100%" }}
                label="ایمیل "
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Box>
            <Box variant="div" className="inputContainer">
              <TextField
                error={passwordError}
                sx={{ marginTop: "10px", width: "100%" }}
                variant="outlined"
                label="کلمه عبور"
                value={password}
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Box>
            <Button
              sx={{ marginTop: "15px" }}
              variant="contained"
              onClick={() => validate()}
            >
              ثبت نام
            </Button>
          </form>
        </Box>
      </Box>

      <Grid
        className="panels"
        sx={{ flexWrap: "nowrap", width: "100%", height: "100%" }}
        container
      >
        <Box variant="div" className="panel leftPanel" item xs={6}>
          <Box variant="div" className="content">
            <Typography variant="h5" component="h2">
              قبلا حساب کاربری ساختی؟
            </Typography>
            <Typography mt={1} variant="p" component="p">
              باوارد کردن اطلاعات حساب وارد حساب کاربریت شو
            </Typography>
            <Button
              className="btnChangeMode"
              onClick={() => {
                setSignUpMode(false);
                clearValidates();
                clearInputValues();
              }}
              sx={{
                color: "#fff",
                borderColor: "#fff",
                marginTop: "25px",
                borderRadius: "10px",
                minWidth: "120px",
              }}
              variant="outlined"
            >
              ورود
            </Button>
          </Box>
          <figure style={{ maxHeight: "50%", zIndex: 7 }}>
            <img src={img1} />
          </figure>
        </Box>
        <Box variant="div" className="panel rightPanel" item xs={6}>
          <Box variant="div" className="content">
            <Typography variant="h5" component="h2">
              تابحال حساب کاربری نداشتی؟
            </Typography>
            <Typography mt={1} variant="p" component="p">
              حساب کاربریت روبساز وباماهمراه شو
            </Typography>
            <Button
              className="btnChangeMode"
              onClick={() => {
                setSignUpMode(true);
                clearValidates();
                clearInputValues();
              }}
              sx={{
                color: "#fff",
                borderColor: "#fff",
                marginTop: "25px",
                borderRadius: "10px",
                minWidth: "120px",
              }}
              variant="outlined"
            >
              ایجاد حساب
            </Button>
          </Box>
          <figure style={{ maxHeight: "50%", zIndex: 7 }}>
            <img src={img2} />
          </figure>
        </Box>
      </Grid>
      <IconButton
        onClick={() => {
          navigate("..");
        }}
        style={{ position: "fixed", top: "25px", left: "25px", zIndex: "10" }}
        aria-label="delete"
        size="small"
      >
        <KeyboardBackspaceIcon fontSize="large" />
      </IconButton>
    </Grid>
  );
};

export default SignInSignUp;
