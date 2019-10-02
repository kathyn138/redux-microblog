import React from "react";
import { Link } from "react-router-dom"

class HomePageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let posts = this.props.posts.map(p => {
      return (
        <div className='card w-50'>
          <div className='card-body'>
            <h5 className='card-title'>
              <Link to={`/${p.id}`}>{p.title}</Link>
              
            </h5>
            <p className='card-text'>{p.description}</p>
          </div>
        </div>
      );
    });

    return (
      <React.Fragment>
        <h5>
          Welcome to Microblog, our innovative site for communicating on the
          information superhighway
        </h5>
        <div className='row'>{posts}</div>
      </React.Fragment>
    );
  }
}

export default HomePageList;
