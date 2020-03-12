//Packages
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux"

//Components
import { unfetchUser } from "../../../actions/index";
import { NavContainer } from "../../../styles/Styles";
import { Redirect } from "react-router-dom";


const Nav = props => {

  const token = window.localStorage.token
  return( 
    <NavContainer>
        <div className = "nav-link">
            <Link to = "/">Home</Link> 
        </div>

        <div className = "nav-link">
          <Link to = "/events">My Events</Link>
        </div>

        <div className = "nav-link">
          <Link to = "/">Settings</Link>
        </div>

        <div className = "nav-link">
          <Link to = "/" onClick = {()=>props.unfetchUser() }>Log Out</Link>
        </div>
        
        <div className = "nav-search">
          <button>Search Button</button>
        </div>
        
    </NavContainer>
  );
}


export default connect(
  state => {
    return {
      userData: state.userData,
      isFetching: state.isFetching,
      error: state.error
    };
  },
  { unfetchUser }
)(Nav);