import React from 'react';
import uuid from 'uuid/v4';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '', 
      id: uuid()
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addComment(this.state, this.props.postId);
    this.setState({text: '', id: uuid()});
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value});
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <input type="text" className="form-control" id="comment" placeholder="" name="text" value={this.state.text} onChange={this.handleChange} />
        </div>
        <button type="button" className="btn btn-primary" style={{ marginRight: "10px" }} onClick={this.handleSubmit}>Save</button>
      </form>
    )
  }
}

export default CommentForm;