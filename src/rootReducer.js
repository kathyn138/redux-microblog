import {
  ADDPOST,
  EDITPOST,
  REMOVEPOST,
  ADDCOMMENT,
  REMOVECOMMENT,
  LOADPOSTS
} from "./actionTypes";

const INITIAL_STATE = {
  posts: {}
  // posts: {
  //   giberish: {
  //     title: "title of post",
  //     description: "description of post",
  //     body: "body of post",
  //     id: "giberish",
  //     comments: {
  //       1: {
  //         text: "hello"
  //       },
  //       2: {
  //         text: "whiskey"
  //       }
  //     }
  //   }
  , titles: [],
  isEditing: false
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADDPOST:
      let postCopy = { ...state.posts };
      postCopy[action.payload.id] = action.payload;
      postCopy[action.payload.id]["comments"] = {};
      return { 
        ...state,
        posts: postCopy
      };

    case EDITPOST:
      let postToEdit = { ...state.posts };

      // ...postToEdit[action.payload.id] is needed
      // it prevents us from overwriting comments
      
      postToEdit[action.payload.id] = {
        ...postToEdit[action.payload.id],
        ...action.payload.newPost
      };
      return { 
        ...state,
        posts: postToEdit
      };

    case REMOVEPOST:
      let postToRemove = { ...state.posts };
      if (!postToRemove[action.payload]) return postToRemove;

      delete (postToRemove[action.payload])
      return { 
        ...state,
        posts: postToRemove
      };

    case ADDCOMMENT: 
      let commentToAdd = { ...state.posts };
      if (!commentToAdd[action.payload.postId]) { return state; }
      commentToAdd[action.payload.postId]["comments"][action.payload.comment.id] = {
        ...action.payload.comment
      };

      return {
        ...state,
        posts: commentToAdd
      };

    case REMOVECOMMENT:
      let commentToRemove = { ...state.posts };
      if(!commentToRemove[action.payload.postId]["comments"][action.payload.commentId]){
        return state;
      } else {
        delete (commentToRemove[action.payload.postId]["comments"][
          action.payload.commentId]);
      }
      return {
        ...state,
        posts: commentToRemove
      };

    case LOADPOSTS: 
      return { ...state, posts: action.posts}

    default:
      return state;
  }
}

export default rootReducer;
