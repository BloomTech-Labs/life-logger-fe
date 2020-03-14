import React, { useState } from "react";

import { connect } from "react-redux";
import { fetchUser } from "../../actions/index";

import {
  LoginWrapper,
  LoginForm,
  LoginRegisterButton
} from "../../styles/Styles";

const initialValues = {
  username: "",
  password: ""
};

const FetchUserForm = props => {
  const [user, setUser] = useState(initialValues);

  const ToggleRegisterComponent = e => {
    console.log(props);
    props.setIsUser(false);
  };

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.fetchUser(user);
  };

  return (
    <LoginWrapper>
      <div className="login-details-container">
        <div className="login-info-container">
          <h1>Life Logger</h1>
          <span>
            Organize all the things about life that are irregular. The things
            you forget to do. Change your oil, rotate your tires, replace your
            AC air filter. Home, auto, other maintenance tasks. Log events,
            later searchable so you can remember when /where /what you did.
          </span>
        </div>

        <div className="login-img"></div>
      </div>

      <div className="login-form-container">
      
        <LoginForm onSubmit={handleSubmit}>
        <h2> Login</h2>
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
    
            <LoginRegisterButton type="submit">Submit</LoginRegisterButton>
    
          </div>
          <LoginRegisterButton onClick={() => ToggleRegisterComponent()}>
            Or register here!
          </LoginRegisterButton>
        </LoginForm>
      </div>
    </LoginWrapper>
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
  { fetchUser }
)(FetchUserForm);
