import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <ul style={{listStyleType: "none"}}>
      {this.props.currentPost[0].comments.map(p =>
        <Comment postId={this.props.currentPost[0].id} comment={p} removeComment={this.props.removeComment} />)}
      </ul>
    )
  }
}

export default CommentList;