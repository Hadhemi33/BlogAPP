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
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <BrowserRouter>
      <Container maxwidth="xl">
        <Navbar />
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          {/* <Route path="/auth" exact component={Auth} /> */}
          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
          />
        </Switch>

        {/* grow provide simple animation  */}
      </Container>
    </BrowserRouter>
  );
};
export default App;
