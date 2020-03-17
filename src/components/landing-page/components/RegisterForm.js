import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../store/actions';
import { RegisterForm as Form } from '../styles';

const RegisterForm = props => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    email: ''
  });

  const handleChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createUser(newUser));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <h2>Register</h2>
        <input
          name="username"
          placeholder="Username"
          value={newUser.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={newUser.password}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        <button
          onClick={() => props.setActiveForm('login')}
        >
          Go Back
        </button>
      </div>
    </Form>
  );
};

export default RegisterForm;
