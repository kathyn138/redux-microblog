import React from "react";
import Form from "./Form";
import CommentForm from './CommentForm';
import CommentList from './CommentList';

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: true
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpVote = this.handleUpVote.bind(this);
  }

  componentDidMount() {
    this.props.getOnePostFromApi(this.props.match.params.postid);
    this.props.getCommentsFromApi(this.props.match.params.postid);
  }

  handleEdit(evt) {
    evt.preventDefault();
    this.setState({ visibility: !this.state.visibility })
  }

  async handleRemove(id) {
    await this.props.deletePostFromApi(id);
    this.props.history.push('/');
  }

  handleUpVote(id, up) {
    this.props.sendVoteToAPI(id, up);
  }

  renderLoading() {
    return <p>Loading...</p>;
  }

  render() {
    let blogId = this.props.match.params.postid;
    let currentPost = this.props.post;
    if (!currentPost) { return this.renderLoading(); }

    let visibility = this.state.visibility ? "hidden" : "visible";

    return (
      <React.Fragment>
        <div className='col-10' style={{ margin: "0 auto" }}>
          <div className='jumbotron'>
            <div className='d-flex justify-content-end'>
              <i
                style={{ marginRight: "6px", color: "blue" }}
                className='flex-end fas fa-edit' onClick={this.handleEdit}></i>
              <i style={{ color: "red" }} className='fas fa-times' onClick={() => this.handleRemove(blogId)}></i>
            </div>

            <div className='d-flex justify-content-end' style={{ marginTop: '10px' }}>
              {currentPost.votes} votes:
              <i className='fas fa-thumbs-up'
                style={{ color: 'green', marginLeft: '10px' }}
                onClick={() => this.handleUpVote(blogId, 'up')}
              ></i>
              <i className='fas fa-thumbs-down' 
              style={{ color: 'red', marginLeft: '10px' }}
              onClick={() => this.handleUpVote(blogId, 'down')}
              ></i>
            </div>

            <h1 className='display-6'>{currentPost.title}</h1>
            <p className='lead'>{currentPost.description}</p>
            <p>{currentPost.body}</p>
            <hr className='my-4' />
            <h1 className='display-6'>Comments</h1>
            <CommentList currentPost={currentPost} deleteCommentFromApi={this.props.deleteCommentFromApi} />
            <CommentForm addComment={this.props.addCommentToApi} postId={blogId} />
          </div>
        </div>
        <div style={{ visibility }} className="form-div">
          <Form
            updatePostFromApi={this.props.updatePostFromApi}
            isEditing={true}
            currentPost={currentPost}
            history={this.props.history}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default PostDetail;
