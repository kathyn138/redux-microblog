import axios from "axios";
import {
  ADDPOST,
  EDITPOST,
  REMOVEPOST,
  ADDCOMMENT,
  REMOVECOMMENT,
  LOADPOSTS,
  LOADONEPOST, 
  LOADCOMMENTS,
  VOTE
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

function getPost(post) {
  return {
    type: LOADONEPOST,
    post
  }
}

export function getOnePostFromApi(id) {
  return async function thunk(dispatch) {
    try {
      let response = await axios.get(`${BASE_URL}/api/posts/${id}`);
      dispatch(getPost(response.data));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export function updatePostFromApi(id, postData) {
  return async function thunk(dispatch) {
    try {
      let response = await axios.put(`${BASE_URL}/api/posts/${id}`, postData);
      dispatch(editPost(id, response.data))
    } catch (error) {
      dispatch(handleError(error));
    }
  }
}

export function deletePostFromApi(id) {
  return async function thunk(dispatch) {
    try {
      let response = await axios.delete(`${BASE_URL}/api/posts/${id}`);
      dispatch(removePost(response.data));
    } catch (error) {
      dispatch(handleError(error));
    }
  }
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

export function addCommentToApi(postId, comment) {
  return async function thunk(dispatch) {
    try {
      let response = await axios.post(`${BASE_URL}/api/posts/${postId}/comments`, comment);
      dispatch(addComment(response.data, postId));
  } catch (error) {
      dispatch(handleError(error));
    }
  }
}

function getComments(comments, postId) {
  return { type: LOADCOMMENTS, comments, postId };
}

export function getCommentsFromApi(postId) {
  return async function thunk(dispatch) {
    try {
      let response = await axios.get(`${BASE_URL}/api/posts/${postId}/comments`);
      dispatch(getComments(response.data, postId));
  } catch (error) {
      dispatch(handleError(error));
    }
  }
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

export function deleteCommentFromApi(commentId, postId) {
    console.log("api", commentId, postId)
  return async function thunk(dispatch) {
    try {
      await axios.delete(`${BASE_URL}/api/posts/${postId}/comments/${commentId}`);
      dispatch(removeComment(commentId, postId));
  } catch (error) {
      dispatch(handleError(error));
      console.log("in error")
    }
  }
}

export function vote(postId, votes) {
  return {
    type: VOTE,
    payload: {
      postId, 
      votes
    }
  };
}


export function sendVoteToAPI(postId, direction) {
  return async function thunk(dispatch) {
    try {
      const response = await axios.post(`${BASE_URL}/api/posts/${postId}/vote/${direction}`);
      dispatch(vote(postId, response.data.votes));
    } catch (error) {
      dispatch(handleError(error));
      console.log("in error")
    }
  };
}