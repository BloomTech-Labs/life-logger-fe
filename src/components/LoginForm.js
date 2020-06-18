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
  padding: '6 px 12px',
  fontSize: '14px',
  lineHeight: '1.5',
  
};
const formControl = {
  marginBottom: '20px'
}
const error = {
  color: 'red'
}
export default function LoginForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })
  console.log('form touched', formik.touched)
  // console.log('form errors', formik.errors)
  // console.log('Form values', formik.values);
  return (
    <div style={loginFormStyle}>
      <form onSubmit={formik.handleSubmit}>
        <div className={formControl}>
        <label style={labelStyle} htmlFor="username">
          Username:
        </label>
        <input
          style={inputStyle}
          type="text"
          id="username"
          maxLength="25"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? <div className='error'>{formik.errors.username}</div> : null}
        </div>
        <div className={formControl}>
        <label style={labelStyle} htmlFor="password">
          Password:
        </label>
        <input
          style={inputStyle}
          type="text"
          id="password"
          minLength="8"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? <div className='error'>{formik.errors.username}</div> : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
