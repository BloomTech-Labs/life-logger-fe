import React, { useState } from "react";

import { connect } from "react-redux";
import { createUser } from "../../actions/index";

const initialValues = {
  username: "",
  password: "",
  email: ""
};

const AddUserForm = props => {
  const [newUser, setNewUser] = useState(initialValues);

  const handleChange = event => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    props.createUser(newUser);
  };

  return (
    <div>
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <input
                name="name"
                placeholder="Username"
                value={newUser.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                name="password"
                placeholder="Password"
                value={newUser.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                name="email"
                placeholder="Email"
                value={newUser.email}
                onChange={handleChange}
              />
            </div>

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(
  state => {
    return {
      userData: state.userData,
      isFetching: state.isFetching,
      error: state.error
    };
  },
  { createUser }
)(AddUserForm);
