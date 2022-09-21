import express from "express"
import { createPost, deleteByID, doesPostExist, getPostByID, getPosts } from "../actions/posts.action.js";

const postsRouter = express.Router();

postsRouter.get('/', getPosts);
postsRouter.post('/', createPost);
postsRouter.get('/:id', doesPostExist, getPostByID);
postsRouter.delete('/:id', doesPostExist, deleteByID);

export default postsRouter;
