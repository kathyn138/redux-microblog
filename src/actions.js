import {
  ADDPOST,
  EDITPOST,
  REMOVEPOST,
  ADDCOMMENT,
  REMOVECOMMENT
} from "./actionTypes";

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
        id, newPost
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
        comment, postId
    }
  };
}

export function removeComment(commentId, postId) {
  return {
    type: REMOVECOMMENT,
    payload: {
        commentId, postId
    }
  };
}
