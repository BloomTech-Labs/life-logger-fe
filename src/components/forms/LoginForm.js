/**@jsx jsx*/
import { jsx } from 'theme-ui';
import { Input, Label, Button } from '@theme-ui/components';
import { darken } from '@theme-ui/color';
import { Fragment } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ReactRouterPropTypes from 'react-router-prop-types';

const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

export default function LoginForm(props) {
  const initialValues = {
    username: '',
    password: '',
  };

  const onSubmit = (value) => {
    return axios
      .post('https://lyfe-logger-be.herokuapp.com/api/auth/login', value)
      .then((res) => {
        window.localStorage.setItem('token', res.data.token);
        window.localStorage.setItem('userId', res.data.user_id); // needed for TaskContext to make axios requests for tasks
        props.history.push('/dashboard');
      })
      .catch((err) => {
        console.log('Error logging in: ', err);
        props.history.push('/login');
      });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <Fragment>
      <div
        sx={{
          width: `300px`,
          margin: `0 auto 2rem`,
        }}
      >
        <h2
          sx={{
            fontSize: `2rem`,
            marginBottom: `0`,
          }}
        >
          Welcome Back
        </h2>
        <p sx={{ color: darken('muted', 0.5) }}>Sign in to continue</p>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        sx={{
          width: `300px`,
          margin: `0 auto`,
          display: `grid`,
          gridGap: `2px`,
        }}
      >
        <Label htmlFor="username" sx={{ fontSize: `1.25rem` }}>
          Username
        </Label>
        <Input
          type="text"
          id="username"
          name="username"
          mb={3}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="error">{formik.errors.username}</div>
        ) : null}
        <Label htmlFor="password" sx={{ fontSize: `1.25rem` }}>
          Password
        </Label>
        <Input
          type="password"
          id="password"
          name="password"
          mb={3}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error">{formik.errors.username}</div>
        ) : null}
        <Button
          type="submit"
          sx={{
            margin: `4rem auto 0`,
            width: `300px`,
          }}
        >
          Login
        </Button>
      </form>
    </Fragment>
  );
}

LoginForm.propTypes = {
  history: ReactRouterPropTypes.history,
  location: ReactRouterPropTypes.location,
  match: ReactRouterPropTypes.match,
  route: ReactRouterPropTypes.route,
};
