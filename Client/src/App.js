// functionel component
import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
// import { useDispatch } from "react-redux";
// import Posts from "./components/Posts/Posts";
// import Form from "./components/Form/Form";
// import { getPosts } from "./actions/posts";
// import useStyles from "./styles";
// import memories from "./images/memories.png";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/auth" exact component={Auth} />
        </Switch>

        {/* grow provide simple animation  */}
      </Container>
    </BrowserRouter>
  );
};
export default App;
