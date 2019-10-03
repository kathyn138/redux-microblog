import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import FormContainer from '../Containers/FormContainer';
import PostDetailContainer from '../Containers/PostDetailContainer';
import HomeContainer from '../Containers/HomeContainer';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/new" render={(rtProps) => <FormContainer {...rtProps} />} />
          <Route exact path="/:postid" render={(rtProps) => <PostDetailContainer
          {...rtProps} />} />
        <Route exact path="/" render={() => <HomeContainer />} />
        <Redirect to="/" />   
      </Switch>
    )
  }
}

export default Routes;