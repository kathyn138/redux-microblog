import React from 'react';
import './App.css';
import Routes from './Components/Routes';
import NavBar from './Components/NavBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        { title: "Title", description: "descr", body: "body", id: "giberish", comments: ['hello', 'whiskey'] }
      ],
      isEditing: false
    };
    this.addPost = this.addPost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.removePost = this.removePost.bind(this);
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
      if(p.id === postId){
        return {...p}
      } 
    })

    this.setState(st => ({
      posts: [...st.posts, currentPost
    }))
  }

  render () {
    return (
  <div>
    <NavBar />
    <Routes editPost={this.editPost} isEditing={this.isEditing} addPost={this.addPost} removePost={this.removePost} posts={this.state.posts} />
  </div>
    )
  }
}

export default App;
