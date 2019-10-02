import React from 'react';
import './App.css';
import Routes from './Components/Routes';
import NavBar from './Components/NavBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        { title: "Title", description: "descr", body: "body", id: "giberish", 
        comments: [{id: 1, text: 'hello'}, {id: 2, text: 'whiskey'}] }
      ],
      isEditing: false
    };
    this.addPost = this.addPost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.removePost = this.removePost.bind(this);
    this.addComment = this.addComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
  }

  addPost(post) {
    this.setState(st => ({
      posts: [...st.posts, post]
    }));
  }

  editPost(id, newPost){
    const updatedPost = this.state.posts.map(p => {
      if(p.id === id){
        return {...newPost}
      } else {
         return p;
      }
    })
    this.setState({ posts: updatedPost})
  }

  removePost(id) {
    const keptPosts = this.state.posts.filter(p => {
      if (p.id !== id) {
        return p
      }
    })
    this.setState({posts: keptPosts})
  }

  addComment(comment, postId) {
    const currentPost = this.state.posts.map(p => {
      if (p.id === postId) {
        p.comments.push(comment)
        return {...p}
      } else {
        return p;
      }
    })
  
    this.setState({
      posts: currentPost
    });
  }

  removeComment(commentId, postId) {
    const currentPost = this.state.posts.map(p => {
      if (p.id === postId) {
        let keptComments = p.comments.filter(c => {
          if (c.id !== commentId) {
            return c
          }
        })
        return {...p, comments: keptComments}
      } else {
        return p;
      }
    })

    this.setState({
      posts: currentPost
    });
  
  }

  render () {
    return (
  <div>
    <NavBar />
    <Routes editPost={this.editPost} 
    isEditing={this.isEditing} 
    addPost={this.addPost} 
    removePost={this.removePost} 
    posts={this.state.posts}
    addComment={this.addComment} 
    removeComment={this.removeComment} />
  </div>
    )
  }
}

export default App;
