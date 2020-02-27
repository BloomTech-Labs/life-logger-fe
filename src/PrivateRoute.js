import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.token
  console.log('PrivateRoute: token=', token)
  return (
    <Route {...rest} render = {props => token ? <Component {...props} {...rest} /> : <Redirect to='/' />} />
  )
}

export default PrivateRoute