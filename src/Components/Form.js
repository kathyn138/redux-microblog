import React from 'react';
import uuid from 'uuid/v4'

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.isEditing ? {
      title: this.props.currentBlog.title, 
      description: this.props.currentBlog.description, 
      body: this.props.currentBlog.body,
      id: this.props.currentBlog.id
    } : {
      title: '', 
      description: '', 
      body: '',
      id: uuid()
    };

    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addPostToApi(this.state)
    this.props.history.push('/');

  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value});
  }

  handleCancel(evt) {
    evt.preventDefault();
    this.props.history.push('/');
  }

  handleEdit(evt){
     evt.preventDefault();
     // clean up parameters passed to edit post.
     console.log("id", this.state.id)
     console.log("this is state", this.state)
     this.props.updatePostFromApi(this.state.id, this.state);
     this.props.history.push("/");
  }

  render() {
    let submit;
    this.props.isEditing ? submit = this.handleEdit : submit = this.handleSubmit;
    
    return (
      <React.Fragment>
        <div className='col-8' style={{ margin: "0 auto" }}>
          <form onSubmit={submit}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                className='form-control'
                id='title'
                placeholder=''
                name='title'
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <input
                type='text'
                className='form-control'
                id='description'
                placeholder=''
                name='description'
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='body'>Body</label>
              <textarea
                className='form-control'
                id='body'
                rows='7'
                name='body'
                value={this.state.body}
                onChange={this.handleChange}></textarea>
            </div>
            <button
              type='submit'
              className='btn btn-primary'
              style={{ marginRight: "10px" }}>
              Save
            </button>
          </form>
          <button
            type='button'
            className='btn btn-secondary'
            onClick={this.handleCancel}>
            Cancel
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;