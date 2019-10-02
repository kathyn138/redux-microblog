import React from "react";
import Form from "./Form";
import CommentForm from './CommentForm';

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: true
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
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

    let currentBlog = this.props.posts.filter(blog => {
      return blog.id === blogId;
    });

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

            <h1 className='display-6'>{currentBlog[0].title}</h1>
            <p className='lead'>{currentBlog[0].description}</p>
            <hr className='my-4' />
            <p>{currentBlog[0].body}</p>
            <hr className='my-4' />
            <h1  className='display-6'>Comments</h1>
            <CommentForm />
          </div>
        </div>
        <div style={{ visibility }} className="form-div">
          <Form
            formMethod={this.props.formMethod}
            isEditing={true}
            currentBlog={currentBlog[0]}
            history={this.props.history}
          />
        </div>
      </React.Fragment>
    );

    return blog;
  }
}

export default PostDetail;
