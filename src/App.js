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
      ],
      isEditing: false
    };
    this.addPost = this.addPost.bind(this);
    this.editPost = this.editPost.bind(this);
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

  render () {
    return (
  <div>
    <NavBar />
    <Routes editPost={this.editPost} isEditing={this.isEditing} addPost={this.addPost} posts={this.state.posts} />
  </div>
    )
  }
}

export default App;
