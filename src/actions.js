import axios from "axios";
import {
  ADDPOST,
  EDITPOST,
  REMOVEPOST,
  ADDCOMMENT,
  REMOVECOMMENT,
  LOADPOSTS,
  LOADONEPOST
} from "./actionTypes";

const BASE_URL = "http://localhost:5000";

export function addPost(post) {
  return {
    type: ADDPOST,
    payload: post
  };
}

export function editPost(id, newPost) {
  return {
    type: EDITPOST,
    payload: {
      id,
      newPost
    }
  };
}

export function removePost(id) {
  return {
    type: REMOVEPOST,
    payload: id
  };
}

export function addComment(comment, postId) {
  return {
    type: ADDCOMMENT,
    payload: {
      comment,
      postId
    }
  };
}

export function removeComment(commentId, postId) {
  return {
    type: REMOVECOMMENT,
    payload: {
      commentId,
      postId
    }
  };
}

function handleError(error) {
  return {
    type: "ERROR",
    error
  };
}

export function addPostToApi(post) {
  return async function thunk(dispatch) {
    try {
      let addPost = await axios.post(`${BASE_URL}/api/posts`);
      dispatch(addPost(addPost.data));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

function getPosts(posts) {
  return { type: LOADPOSTS, posts };
}

export function getPostsFromApi() {
  return async function thunk(dispatch) {
    try {
      let allPosts = await axios.get(`${BASE_URL}/api/posts`);
      dispatch(getPosts(allPosts.data));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

function getPost(id){
    return {
        type: LOADONEPOST,
        id: id
    }
}

export function getOnePostFromApi(id) {
  return async function thunk(dispatch) {
    try {
      let post = await axios.get(`${BASE_URL}/api/${id}`);
      dispatch(getPost(post.data));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}