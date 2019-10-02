import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewPostForm from './NewPostForm';
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
        <Route exact path="/new" render={(rtProps) => <NewPostForm addPost={this.props.addPost} {...rtProps} />} />
        <Route exact path="/:postid" render={(rtProps) => <PostDetail {...rtProps} />} />
        <Route exact path="/" render={() => <HomePageList />} />

      </Switch>
    )
  }
}

export default Routes;