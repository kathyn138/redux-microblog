import React from "react";
import Comment from "./Comment";

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currentPost } = this.props;
    
    let commentArray = [];

    for (let commentId in currentPost.comments) {
      commentArray.push(
        <Comment key={commentId}
          postId={currentPost.id}
          comment={currentPost.comments[commentId]}
          removeComment={this.props.removeComment}
        />
      );
    }

    return <ul style={{ listStyleType: "none" }}>{commentArray}</ul>;
  }
}

export default CommentList;
