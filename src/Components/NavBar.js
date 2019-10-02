import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>Microblog</h1>
        <h3>Get in the Rithm of blogging!</h3>
        
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/new">Add a New Post</NavLink>
              </li>
            </ul>
          </div>
        </nav> */}

        <div>
          <NavLink className="nav-item" style={{marginRight: "10px"}} exact to="/">Home</NavLink>
          <NavLink className="nav-item" exact to="/new">Add a New Post</NavLink>
        </div>
      </React.Fragment>
    )
  }
}

export default NavBar;