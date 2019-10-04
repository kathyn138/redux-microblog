import PostDetail from '../Components/PostDetail';
import { connect } from 'react-redux';
import {
  editPost,
  removePost,
  addComment,
  removeComment,
  getOnePostFromApi,
  updatePostFromApi, 
  deletePostFromApi, 
  getCommentsFromApi, 
  addCommentToApi, 
  deleteCommentFromApi
} from "../actions";

function mapStateToProps(state, ownProps) {
  return {
    post: state.post
  }
}

const mapDispatchToProps = {
  editPost, removePost, addComment, removeComment, getOnePostFromApi, updatePostFromApi, deletePostFromApi,  getCommentsFromApi, 
  addCommentToApi, 
  deleteCommentFromApi
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);