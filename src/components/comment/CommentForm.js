import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid, Typography, Button } from "@mui/material";
import { useMutation } from "@apollo/client";
import { CREATE_COMMENT } from "../graphql/mutations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CommentForm = ({ slug }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [pressed, setPressed] = useState(true);

  const [addComment, { data, loading, error }] = useMutation(CREATE_COMMENT, {
    variables: { slug: slug, text: text, email: email, name: name },
  });
  const createComment = () => {
    if (text && email && name) {
      addComment();
      setPressed(true);
    } else {
      toast.warn("همه فیلدهاراپرکنید!", { position: "top-center" });
    }
  };

  if (data && pressed) {
    console.log(data);
    toast.success("باموفقیت ارسال شدودرانتظارتاییدمیباشد", {
      position: "top-right",
    });
    setPressed(false);
  }
  return (
    <Grid
      mt={8}
      container
      border="1px solid #ccc"
      sx={{
        padding: "20px",
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
      }}
    >
      <ToastContainer />
      <Grid item xs={12}>
        <Typography variant="h6" component="p" fontWeight={700} color="primary">
          ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} mt={2}>
        <TextField
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          fullWidth
          label="نام کاربری"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} mt={2}>
        <TextField
          style={{
            left: "inherit !important",
            right: " 1.75rem !important",
            transformOrigin: " right !important",
          }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          fullWidth
          label="ایمیل"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} mt={2}>
        <TextField
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
          multiline
          minRows={4}
          fullWidth
          label="متن کامنت"
          variant="outlined"
        />
      </Grid>
      {loading ? (
        <Button disabled style={{ marginTop: "20px" }} variant="contained">
          درحال ارسال
        </Button>
      ) : (
        <Button
          onClick={() => {
            createComment();
          }}
          style={{ marginTop: "20px" }}
          variant="contained"
        >
          ارسال
        </Button>
      )}
    </Grid>
  );
};

export default CommentForm;
