import React from 'react';
import './App.css';
import Routes from './Components/Routes';
import NavBar from './Components/NavBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        { title: "title", description: "descr", body: "body", id: "giberish" }
      ]
    };
    this.addPost = this.addPost.bind(this);
  }

  addPost(post) {
    this.setState(st => ({
      posts: [...st.posts, post]
    }));
  }

  editPost(id, post){
    const updatedPosts = this.state.posts.map(p => {
      if(p.id === id){
        return {...post, description: post.description }
      }
      return post 
    })
    this.setState({ posts: updatedPosts})
  }

  render () {
    return (
  <div>
    <NavBar />
    <Routes editPost={this.editPost} addPost={this.addPost} posts={this.state.posts} />
  </div>
    )
  }
}

export default App;
