import {
  ADDPOST,
  EDITPOST,
  REMOVEPOST,
  ADDCOMMENT,
  REMOVECOMMENT,
  LOADPOSTS,
  LOADONEPOST,
  ERROR, 
  LOADCOMMENTS, 
  VOTE
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

    case ERROR: 
      console.log("THIS IS THE ERROR", action)
      console.log(state)
      return {...state}

    case ADDPOST:
      console.log("action", action.payload)
      let postCopy = { ...state.posts };
      postCopy[action.payload.id] = action.payload;
      postCopy[action.payload.id]["comments"] = {};
      return { 
        ...state,
        posts: postCopy,
        titles: { 
          title: action.payload.title,
          id: action.payload.id,
          description: action.payload.description
        }

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
      const { postId } = action.payload;
      if (!state.post || +postId !== state.post.id) return state;

      let post = { ...state.post };
      
      post.comments = [
        ...post.comments,
        { ...action.payload.comment}
      ];
      return {
        ...state,
        post
      };

    case REMOVECOMMENT:
      console.log("rootreducer", action.payload.commentId, action.payload.postId)
      // let posts = { ...state.posts };

      // if (!state.post || +postId !== state.post.id) return state;

      // let currentPost = {...state.post };

      // let commentsToKeep = currentPost.comments.filter((c) => +c.id !== +action.payload.commentId)
      
      // currentPost.comments = [
      //   ...currentPost.comments, 
      //   commentsToKeep
      // ]

      return {
        ...state,
        post: {
          ...state.post, comments: state.post.comments.filter(
            comment => comment.id !== action.payload.commentId
          )
        }
      }

      // if(![posts][action.payload.postId]["comments"][action.payload.commentId]){
      //   return state;
      // } else {
      //   delete ([posts][action.payload.postId]["comments"][
      //     action.payload.commentId]);
      // }
      // return {
      //   ...state,
      //   currentPost
      // };


    case LOADPOSTS: 
      return { ...state, posts: action.posts}

    case LOADONEPOST:
      return { ...state, post: {...action.post}}

    case LOADCOMMENTS:
      let postsArr = { ...state.posts };
      if (!postsArr[action.payload.postId]) { return state; }
      console.log('loadcomments', action.payload)
      postsArr[action.payload.postId].comments = [
        ...action.comments
      ];
      return {
        ...state,
        posts: postsArr
      };
    
      // this code currently only works for updating the votes on 
      // the homepage
      // i think it has to do with the way we're structuring allPosts
      // it seems like the data type (array/object) of state is different
      // for one post vs for when we're loading all posts
      // i'm not really sure so i'll revisit this later
    case VOTE: 
      let allPosts = [ ...state.posts];

      if (!allPosts) { return state; }
      console.log('this is the post', allPosts)
      let clickedPost = state.posts.filter(
        post => post.id === action.payload.postId)
      clickedPost[0].votes = action.payload.votes;

      return {
        ...state,
        posts: allPosts
      };

    default:
      return state;
  }
}

export default rootReducer;
