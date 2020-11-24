import React /*, { useContext }*/ from 'react'
// import { Link } from 'react-router-dom'
// import { LOGIN_SUCCESS_PAGE } from 'utils/constants'
// import { Context } from '../stores'
import Login from './Login'

function Landing(props) {
  // const context = useContext(Context)
  // const isLogged = context.auth.isAuthenticated()

  // const cbLogIn = () => props.history.push(LOGIN_SUCCESS_PAGE)
  // const cbLogOut = () => window.location.replace('/')

  return (
    <>
      {/* <h1>Landing!</h1>
      {isLogged && (
        <Link to={LOGIN_SUCCESS_PAGE}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">
            back to Dashboard
          </button>
        </Link>
      )}

      {!isLogged && (
        <button
          onClick={() => context.auth.login(cbLogIn)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4"
        >
          Log in
        </button>
      )}
      {isLogged && (
        <button
          onClick={() => context.auth.logout(cbLogOut)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4"
        >
          Log Out
        </button>
      )} */}
      <Login />
    </>
  )
}
export default Landing
