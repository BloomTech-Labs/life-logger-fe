/**@jsx jsx*/
import {jsx} from'theme-ui';
import {Input, Label, Button} from '@theme-ui/components'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
    }
        return errors;
        
}
const validationSchema = Yup.object({
  username: Yup.string()
  .required('Required'),
  password: Yup.string()
  .required('Required')
  
})
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
  width: '265px',
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
    validationSchema
    // validate
  })
  // console.log('form touched', formik.touched)
  // console.log('form errors', formik.errors)
  // console.log('Form values', formik.values);
  return (
    <div style={loginFormStyle}>
      <form onSubmit={formik.handleSubmit}
       sx={{
        width: `300px`,
        margin: `0 auto`,
        display: `grid`,
        gridGap: 2,
        padding: 3,
        borderRadius: `12px`,
        bg: (t) => t.colors.primary,
        boxShadow: `0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23)`,
      }} >
        <div className={formControl}>
        <Label style={labelStyle} htmlFor="username">
          Username:
        </Label>
        <Input
          style={inputStyle}
          type="text"
          id="username"
          name='username'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? <div className='error'>{formik.errors.username}</div> : null}
        </div>

        <div className={formControl}>
        <Label style={labelStyle} htmlFor="password">
          Password:
        </Label>
        <Input
          style={inputStyle}
          type="text"
          id="password"
          name='username'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? <div className='error'>{formik.errors.username}</div> : null}
        </div>
        <Button type="submit"    
                sx={{
              //   bg: (t) => t.colors.muted,
              //   color: (t) => t.colors.text,
                  margin: `0 auto`,
            }}>Submit</Button>
      </form>
    </div>
  );
}

