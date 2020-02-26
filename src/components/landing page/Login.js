import React, { useState } from 'react';

import { connect } from "react-redux";
import { fetchUser } from "../../actions/index"

const initialValues = {
  username: "",
  password: ""
}

const FetchUserForm = props => {
  const [user, setUser] = useState(initialValues);

  const handleChange = e => { setUser({...user, [e.target.name] : e.target.value}); };

  const handleSubmit = e => {
    e.preventDefault();

    props.fetchUser(user)
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit = {handleSubmit}>
        <div>
          <div>
            <input 
              name = "username"
              placeholder = "username or email"
              value = {user.username}
              onChange = {handleChange}
            />
          </div>
          <div>
            <input 
              name = "password"
              placeholder = "password"
              type = "password"
              value = {user.password}
              onChange = {handleChange}
            />
          </div>
          <button type = "submit">Submit</button>
        </div>
      </form>
    </div>
  )
}




export default connect(
  state => {
    return {
      userData: state.userData,
      isFetching: state.isFetching,
      error: state.error
    };
  },
  { fetchUser })
  (FetchUserForm);