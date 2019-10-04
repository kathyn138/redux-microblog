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
  }

  componentDidMount(){
      this.props.getOnePostFromApi(this.props.match.params.id);

  }

  handleEdit(evt) {
    evt.preventDefault();
    this.setState({ visibility: !this.state.visibility })
  }

  handleRemove(id) {
    this.props.removePost(id);
    this.props.history.push('/');
  }

  render() {
    let blogId = this.props.match.params.postid;
    let currentBlog = this.props.post;

    let visibility = this.state.visibility ? "hidden" : "visible";

    let blog = (
      <React.Fragment>
        <div className='col-10' style={{ margin: "0 auto" }}>
          <div className='jumbotron'>
            <div className='d-flex justify-content-end'>
              <i
                style={{ marginRight: "6px", color: "blue" }}
                className='flex-end fas fa-edit' onClick={this.handleEdit}></i>
              <i style={{ color: "red" }} className='fas fa-times' onClick={() => this.handleRemove(blogId)}></i>
            </div>

            <h1 className='display-6'>{currentBlog.title}</h1>
            <p className='lead'>{currentBlog.description}</p>
            <hr className='my-4' />
            <p>{currentBlog.body}</p>
            <hr className='my-4' />
            <h1  className='display-6'>Comments</h1>
            <CommentList currentPost={currentBlog} removeComment={this.props.removeComment}/>
            <CommentForm addComment={this.props.addComment} postId={blogId} />
          </div>
        </div>
        <div style={{ visibility }} className="form-div">
          <Form
            editPost={this.props.editPost}
            isEditing={true}
            currentBlog={currentBlog}
            history={this.props.history}
          />
        </div>
      </React.Fragment>
    );

    return blog;
  }
}

export default PostDetail;
