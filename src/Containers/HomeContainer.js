import HomePageList from '../Components/HomePageList';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(HomePageList);