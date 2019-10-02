import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();

  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value});
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <input type="text" className="form-control" id="comment" placeholder="" name="comment" value={this.state.comment} onChange={this.handleChange} />
        </div>
  
        <button type="button" className="btn btn-primary" style={{ marginRight: "10px" }} onClick={this.handleSubmit}>Save</button>
      </form>
    )
  }
}

export default CommentForm;