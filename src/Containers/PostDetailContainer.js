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
  deleteCommentFromApi, 
  sendVoteToAPI
} from "../actions";

function mapStateToProps(state, ownProps) {
  return {
    post: state.post
  }
}

const mapDispatchToProps = {
  editPost, removePost, addComment, removeComment, getOnePostFromApi, updatePostFromApi, deletePostFromApi,  getCommentsFromApi, 
  addCommentToApi, 
  deleteCommentFromApi, sendVoteToAPI
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);