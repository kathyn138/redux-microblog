import {
  ADDPOST,
  EDITPOST,
  REMOVEPOST,
  ADDCOMMENT,
  REMOVECOMMENT
} from "./actionTypes";

const INITIAL_STATE = {
  posts: {
    giberish: {
      title: "title of post",
      description: "description of post",
      body: "body of post",
      id: "giberish",
      comments: {
        1: {
          text: "hello"
        },
        2: {
          text: "whiskey"
        }
      }
    }
  },
  isEditing: false
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADDPOST:
      let postCopy = { ...state.posts };

      postCopy[action.payload.post.id] = action.payload.post;
      return { posts: postCopy };

    case EDITPOST:
      let postToEdit = { ...state.posts };

      postCopy[action.payload.id] = action.payload.newPost;
      return { posts: postToEdit };

    case REMOVEPOST:
      let postToRemove = { ...state.posts };
      if (!postToRemove[action.payload.id]) return postToRemove;

      delete (postToRemove[action.payload.id])
      return {posts: postToRemove}

    case ADDCOMMENT: 
      let commentToAdd = { ...state.posts };
      commentToAdd[action.payload.postId]["comments"][action.payload.comment.id] = action.payload.comment;

      return {posts: commentToAdd}

    case REMOVECOMMENT:
      let commentToRemove = { ...state.posts };
      if(!commentToRemove[action.payload.postId]["comments"][action.payload.commentId]){
        return commentToRemove;
      } else {
        delete (commentToRemove[action.payload.postId]["comments"][
          action.payload.commentId]);
      }
      return {posts: commentToRemove}

    default:
      return state;
  }
}

export default rootReducer;
