import React from 'react';
import './App.css';
import Routes from './Components/Routes';
import NavBar from './Components/NavBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.addPost = this.addPost.bind(this);
  }

  addPost(post) {
    this.setState(st => ({
      posts: [...st.posts, post]
    }));
  }

  render () {
    return (
  <div>
    <NavBar />
    <Routes addPost={this.addPost} />
  </div>
    )
  }
}

export default App;
