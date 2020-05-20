import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ render: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (rest.token ? 
                        // Show the component only when the user is logged in
                        <Component {...props} {...rest} /> 
                        // Otherwise, redirect the user to /signin page
                        : <Redirect to="/SignInPage" />)}
    />
  )
}

export default PrivateRoute