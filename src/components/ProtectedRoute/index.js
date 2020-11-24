import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { NOT_FOUND_PAGE } from 'utils/constants'
import { Context } from '../stores'

function ProtectedRoute(props) {
  const context = useContext(Context)
  return context.auth.isAuthenticated() ? (
    <Route path={props.path} component={props.component} />
  ) : (
    <Redirect to={NOT_FOUND_PAGE} />
  )
}

export default ProtectedRoute
