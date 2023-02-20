import React, { useState } from "react";

import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";

import { LoginSocialGoogle } from "reactjs-social-login";
import { GoogleLoginButton } from "react-social-login-buttons";
import useStyles from "./styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Input from "./Input";
import Icon from "./icon";

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  //  const state = null;
  const [showPassword, setShowPassword] = useState(false);
  //const isSignup = false;
  // return  isSignup into a stateField
  const [isSignup, setIsSignup] = useState(false);
  const history = useHistory();

  const handleSubmit = () => {};
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassworrd(false);
  };
  const handleChange = () => {};
  const handleShowPassworrd = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  const googleAccess = ({ provider, data }) => {
    // console.log(provider, data);

    // console.log(data.id_token);
    try {
      dispatch({
        type: "AUTH",
        data: { result: data, token: data.access_token },
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (error) => {
    console.log(error);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign up" : "Sign in"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type="password"
              handleShowPassworrd={handleShowPassworrd}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign up" : "Sign in"}
          </Button>

          <LoginSocialGoogle
            client_id={
              "581059358726-22787fcgsej74t18sgt8u01pqdd3b81a.apps.googleusercontent.com"
            }
            scope="openid profile email"
            discoveryDocs="claims_supported"
            access_type="offline"
            onResolve={googleAccess}
            onReject={googleFailure}
          >
            <GoogleLoginButton />
          </LoginSocialGoogle>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account ? Sign In"
                  : "You don't have an account ? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
