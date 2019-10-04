import Form from '../Components/Form';
import { connect } from 'react-redux';
import { addPost, addPostToApi, updatePostFromApi } from "../actions";

function mapStateToProps(state) {
  return {
    isEditing: state.isEditing
  }
}

const mapDispatchToProps = {
  addPost,
  addPostToApi,
  updatePostFromApi
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);