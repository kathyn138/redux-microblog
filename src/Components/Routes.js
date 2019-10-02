import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewPostForm from './Form';
import PostDetail from './PostDetail';
import HomePageList from './HomePageList';

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Switch>
        <Route exact path="/new" render={(rtProps) => <NewPostForm formMethod={this.props.addPost} {...rtProps} />} />
        <Route exact path="/:postid" render={(rtProps) => <PostDetail formMethod={this.props.editPost} posts={this.props.posts} {...rtProps} />} />
        <Route exact path="/" render={() => <HomePageList posts={this.props.posts}/>} />

      </Switch>
    )
  }
}

export default Routes;