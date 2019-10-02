import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from './Form';
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
        <Route exact path="/new" render={(rtProps) => <Form formMethod={this.props.addPost} {...rtProps} />} />
        <Route exact path="/:postid" render={(rtProps) => <PostDetail isEditing={this.props.isEditing}
          formMethod={this.props.editPost}
          posts={this.props.posts}
          removePost={this.props.removePost}
          addComment={this.props.addComment}
          removeComment={this.props.removeComment}
          {...rtProps} />} />
        <Route exact path="/" render={() => <HomePageList posts={this.props.posts} />} />

      </Switch>
    )
  }
}

export default Routes;