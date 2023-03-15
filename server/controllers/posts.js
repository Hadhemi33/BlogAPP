import mongoose from "mongoose";
import PostMessage from "../Models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.send(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// QUERY => /posts?pages=1
// PARAMS => /posts/:id

export const getPostsByaSearch = async (req, res) => {
  const { searchQuery, tags } = req.query;
  try {
    const title = new RegExp(searchQuery, "i"); // i cest que maj or min are the same
    const posts = await PostMessage.find({
      $or: [{ title }, { tags: { $in: tags.split(",") } }],
    });
    res.json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPostMessage = new PostMessage({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newPostMessage.save();
    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("Not post with this id");
  const updatePost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });
  res.json(updatePost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Not post with this id");
  const deletePost = await PostMessage.findByIdAndRemove(id);
  res.json({ message: "post is deleted succesfuly" });
};
export const likePost = async (req, res) => {
  const { id } = req.params;
  if (!req.userId) return res.json({ message: "Unauthenticated" });
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Not post with this id");
  const post = await PostMessage.findById(id);
  const index = post.likes.findIndex((id) => id === String(req.userId));
  if (index === -1) {
    //like
    post.likes.push(req.userId);
  } else {
    //dislike
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }
  console.log(post);
  const updatePost = await PostMessage.findByIdAndUpdate(
    id,
    // { likeCount: post.likeCount + 1 },

    post,
    { new: true }
  );
  res.json(updatePost);
};
