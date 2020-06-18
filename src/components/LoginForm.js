import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
    username: '',
    password: ''    
  }
  const onSubmit = value => {
      console.log("Form data", value)
  }
  const validate = values => {
    let errors = {}
    if(!values.username) {
        errors.username = 'Required'
    }
    if(!values.password) {
        errors.password = 'Required'
    } else if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
        errors.password = 'Invalid password'
        return errors;
}


//Styling
const loginFormStyle = {
  display: 'flex',
  justifyContent: 'center',
};
const labelStyle = {
  fontWeight: 'bold',
  display: 'flex',
  marginBottom: '5px',
};
const inputStyle = {
  display: 'block',
  width: '400px',
  padding: '6px 12px',
  fontSize: '14px',
  lineHeight: '1.428573',
};
export default function LoginForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })
    
  console.log('Form values', formik.values);
  return (
    <div style={loginFormStyle}>
      <form onSubmit={formik.handleSubmit}>
        <label style={labelStyle} htmlFor="username">
          Username:
        </label>
        <input
          style={inputStyle}
          type="text"
          id="username"
          maxLength="25"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <label style={labelStyle} htmlFor="password">
          Password:
        </label>
        <input
          style={inputStyle}
          type="text"
          id="password"
          minLength="8"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
