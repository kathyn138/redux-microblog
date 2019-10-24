import HomePageList from '../Components/HomePageList';
import { connect } from 'react-redux';
import {getPostsFromApi, sendVoteToAPI} from '../actions';



function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

const matchDispatchToProps = { getPostsFromApi, sendVoteToAPI }

export default connect(mapStateToProps, matchDispatchToProps)(HomePageList);