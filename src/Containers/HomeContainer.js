import HomePageList from '../Components/HomePageList';
import { connect } from 'react-redux';
import {getPostsFromApi} from '../actions';



function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

const matchDispatchToProps = { getPostsFromApi }

export default connect(mapStateToProps, matchDispatchToProps)(HomePageList);