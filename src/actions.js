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

export function addPost(post) {
  return {
    type: ADDPOST,
    payload: post
  };
}

export function addPostToApi(data) {
  return async function thunk(dispatch) {
    try {
      let response = await axios.post(`${BASE_URL}/api/posts`, data);
      dispatch(addPost(response.data));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

function getPosts(posts) {
  return { type: LOADPOSTS, posts };
}

export function getPostsFromApi() {
  return async function thunk(dispatch) {
    try {
      let response = await axios.get(`${BASE_URL}/api/posts`);
      dispatch(getPosts(response.data));
    } catch (error) {
      dispatch(handleError(error));
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
      let response = await axios.get(`${BASE_URL}/api/${id}`);
      dispatch(getPost(response.data));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export function updatePostFromApi(id, postData){
    console.log("this is the id", id)
    return async function thunk(dispatch){
        try {
         let response = await axios.put(`${BASE_URL}/api/${id}`, postData);
         dispatch(editPost(id,response.data))
        } catch (error) {
            console.log("cons in updatep", error)
          dispatch(handleError(error));
        }
    }
}