import React from "react";
import Form from "./Form"

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    let blogId = this.props.match.params.postid;

    let currentBlog = this.props.posts.filter(blog => {
      return blog.id === blogId;
    });

    let blog = (
      <React.Fragment>
        <Form formMethod={this.props.editPost}/>
        <div className='col-10' style={{ margin: "0 auto" }}>
          <div className='jumbotron'>
            <div className="d-flex justify-content-end">
              <i style={{marginRight: "6px", color: "blue" }}className='flex-end fas fa-edit'></i>
              <i style={{color: "red"}} className='fas fa-times'></i>
            </div>
           
            <h1 className='display-6'>{currentBlog[0].title}</h1>
            <p className='lead'>{currentBlog[0].description}</p>
            <hr className='my-4' />
            <p>{currentBlog[0].body}</p>
          </div>
        </div>
      
      </React.Fragment>
    );

    return blog;
  }
}

export default PostDetail;
