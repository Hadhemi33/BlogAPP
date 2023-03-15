import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getPosts, getPostsBySearch } from "../../actions/posts";
import useStyles from "./styles";

import Paginate from "../pagination";
import { useHistory, useLocation } from "react-router-dom";
// input for tags
import ChipInput from "material-ui-chip-input";
// which page we are and what we are looking for
function useQuery() {
  //we can use it like a hook
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useHistory();
  // if there is no page it must be in the first one
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };
  const searchPost = () => {
    //trim: to make sur there is not empty spaces
    if (search.trim() || tags) {
      // dispatch fetch search posts
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      //change the url
      history.push(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      history.push("/");
    }
  };

  const handleAdd = (tag) => setTags([...tags, tag]);
  const handleDelete = (tagToDelete) =>
    setTags(tags.filter((tag) => tag !== tagToDelete));
  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          className={classes.gridContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search Memories"
                onKeyPress={handleKeyPress}
                fullWidth
                // value={searchQuery}
                value={search}
                onChange={(e) =>
                  // history.push(
                  //   `/?searchQuery=${e.target.value || "none"}&page=1`
                  // )
                  setSearch(e.target.value)
                }
              />
              <ChipInput
                style={{ margin: "10px 0" }}
                value={tags}
                onAdd={handleAdd}
                onDelete={handleDelete}
                label="Search Tags"
                variant="outlined"
              />
              <Button
                onClick={searchPost}
                className={classes.searchButton}
                color="primary"
                variant="contained"
              >
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper
              //className={classes.pagination}
              elevation={6}
            >
              <Paginate />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
