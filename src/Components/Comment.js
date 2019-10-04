import React from 'react';


class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(commentId, postId) {
    this.props.deleteCommentFromApi(commentId, postId);

  }

  render() {
    return (
      <li><i style={{ color: "red" }} className='fas fa-times' onClick={() => this.handleRemove(this.props.comment.id, this.props.postId)}></i> {this.props.comment.text}</li>
    )
  }
}

export default Comment;