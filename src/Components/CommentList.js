import React from "react";
import Comment from "./Comment";

class CommentList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  // async componentDidMount() {
  //   //await this.props.getCommentsFromApi(this.props.currentPost.id)
  // }

  render() {
    const { currentPost } = this.props;
    console.log('currentpost', currentPost)
    
    let commentArray = [];
    for (let comment of currentPost.comments) {
      commentArray.push(
        <Comment key={`${currentPost.id}-${comment.id}`}
          postId={currentPost.id}
          comment={comment}
          deleteCommentFromApi={this.props.deleteCommentFromApi}
        />
      );
    }

    return <ul style={{ listStyleType: "none" }}>{commentArray}</ul>;
  }
}

export default CommentList;
