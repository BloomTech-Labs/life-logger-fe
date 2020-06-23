/** @jsx jsx */
import React, {useContext} from "react"
import { jsx } from 'theme-ui';
import { Input, Label, Button } from '@theme-ui/components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import taskContext from "../context/task_context"

const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, '**Too Short!')
    .max(20, '**Too Long!')
    .required('**Name is required'),
  email: Yup.string().email().required('**Email address is required'),
  password: Yup.string()
    .min(7, '**Too Short!')
    .max(20, '**Too Long!')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, {
      message:
        'Password must have at least 1 digit, 1 lowercase, 1 uppercase, and be at least 8 characters long',
    }) // regex checks if there's at least 1 digit, 1 lowercase, 1 uppercase, and at leat 8 characters
    .required('**Password is required'),
});

const SignupForm = (props) => {

  const { SignUp } = useContext(taskContext);

  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const handleSubmit = (val, e) => {
    e.preventDefault()
    
    SignUp(val)
    .then(res => {
      props.history.push("/success")
    })
    // axiosWithAuth()
    //   .post(`${process.env.BASE_HOST}/api/auth/register`, values)
    //   .then((res) => console.log('Successfully signed up', res))
    //   .catch((err) => console.log('Error signing up', err));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signupSchema}
      
    >
      {({ values, handleChange, errors, touched }) => (
        <Form
          sx={{
            width: `300px`,
            margin: `0 auto`,
            display: `grid`,
            gridGap: 2,
            padding: 3,
            borderRadius: `12px`,
            bg: (t) => t.colors.primary,
            boxShadow: `0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23)`,
          }}
          onSubmit={(e) => handleSubmit(values,e)}
        >
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            name="username"
            type="text"
            value={values.username}
            onChange={handleChange}
            mb={3}
          />
          {errors.username && touched.username ? (
            <p>{errors.username}</p>
          ) : null}

          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            mb={3}
          />
          {errors.email && touched.email ? <p>{errors.email}</p> : null}

          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            mb={3}
          />
          {errors.password && touched.password ? (
            <p>{errors.password}</p>
          ) : null}

          <Button
            type="submit"
            sx={{
              //   bg: (t) => t.colors.muted,
              //   color: (t) => t.colors.text,
              margin: `0 auto`,
            }}
          >
            Signup
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
