import Form from '../Components/Form';
import { connect } from 'react-redux';
import { addPost, editPost } from '../actions';

function mapStateToProps(state) {
  return {
    isEditing: state.isEditing
  }
}

const mapDispatchToProps = {
  addPost
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);