import React from "react";
import "./App.css";
import Routes from "./Components/Routes";
import NavBar from "./Components/NavBar";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: {
  //       giberish: {
  //         title: "title of post",
  //         description: "description of post",
  //         body: "body of post",
  //         id: "giberish",
  //         comments: {
  //           1: {
  //             text: "hello"
  //           },
  //           2: {
  //             text: "whiskey"
  //           }
  //         }
  //       }
  //     },
  //     isEditing: false
  //   };
  //   this.addPost = this.addPost.bind(this);
  //   this.editPost = this.editPost.bind(this);
  //   this.removePost = this.removePost.bind(this);
  //   this.addComment = this.addComment.bind(this);
  //   this.removeComment = this.removeComment.bind(this);
  // }

  // addPost(post) {
  //   // this.setState(st => ({
  //   //   posts: [...st.posts, post]
  //   // }));
  //   let postCopy = { ...this.state.posts };
  //   postCopy[post.id] = post;
  //   this.setState({ posts: postCopy });
  // }

  // editPost(id, newPost) {
  //   // const updatedPost = this.state.posts.map(p => {
  //   //   if (p.id === id) {
  //   //     return { ...newPost };
  //   //   } else {
  //   //     return p;
  //   //   }
  //   // });

  //   let postCopy = { ...this.state.posts };

  //   postCopy[id] = newPost;
  //   this.setState({ posts: postCopy });
  // }

  // removePost(id) {
  //   // const keptPosts = this.state.posts.filter(p => {
  //   //   if (p.id !== id) {
  //   //     return p;
  //   //   }
  //   // });
  //   // this.setState({ posts: keptPosts });

  //   let postCopy = { ...this.state.posts };
  //   if (!postCopy[id]) return postCopy;
  //   delete (postCopy[id]);
  //   this.setState({ posts: postCopy });
  // }

  // addComment(comment, postId) {
  //   // const currentPost = this.state.posts.map(p => {
  //   //   if (p.id === postId) {
  //   //     p.comments.push(comment);
  //   //     return { ...p };
  //   //   } else {
  //   //     return p;
  //   //   }
  //   // });

  //   // this.setState({
  //   //   posts: currentPost
  //   // });

  //   let postCopy = { ...this.state.posts };

  //   postCopy[postId]["comments"][comment.id] = comment;
  //   this.setState({ posts: postCopy });
  // }

  // removeComment(commentId, postId) {
  //   // const currentPost = this.state.posts.map(p => {
  //   //   if (p.id === postId) {
  //   //     let keptComments = p.comments.filter(c => {
  //   //       if (c.id !== commentId) {
  //   //         return c;
  //   //       }
  //   //     });
  //   //     return { ...p, comments: keptComments };
  //   //   } else {
  //   //     return p;
  //   //   }
  //   // });

  //   // this.setState({
  //   //   posts: currentPost
  //   // });

  //   let postCopy = { ...this.state.posts };
  //   console.log(postId);

  //   if (!postCopy[postId]["comments"][commentId]){
  //     return postCopy;
  //   } else{
  //     delete (postCopy[postId]["comments"][commentId]);
  //   }
  //   this.setState({ posts: postCopy });
  // }

  render() {
    return (
      <div>
        <NavBar />
        <Routes
          editPost={this.editPost}
          isEditing={this.isEditing}
          addPost={this.addPost}
          removePost={this.removePost}
          posts={this.state.posts}
          addComment={this.addComment}
          removeComment={this.removeComment}
        />
      </div>
    );
  }
}

export default App;
