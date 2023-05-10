import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
const Posts = ({ setCurrentId, checked }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);

  const classes = useStyles();
  if (!posts.length && !isLoading)
    return (
      <img
        style={{
          width: "80%",
          height: "80%",
          objectFit: "cover",
          marginLeft: "100px",
        }}
        src="https://img.freepik.com/vecteurs-libre/homme-disant-aucune-illustration-concept_114360-14192.jpg?w=740&t=st=1683659022~exp=1683659622~hmac=4265c09d71f2699d51a7bf575eb1c9ff8dae2045d6bb25d72df4ab7b8715149b"
      />
    );

  //console.log(posts);
  // return !posts?.length ? (
  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {checked
        ? posts
            .filter(
              (post) =>
                post.creator ===
                JSON.parse(localStorage.getItem("profile")).result._id
            )
            .map((post) => (
              <Grid key={post._id} item xs={12} sm={12} md={12} lg={6}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))
        : posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={12} md={12} lg={6}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))}
    </Grid>
  );
};
export default Posts;
