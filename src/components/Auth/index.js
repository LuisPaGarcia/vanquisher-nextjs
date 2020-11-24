import auth0 from 'auth0-js'
import { LOGIN_FAILURE_PAGE, LOGIN_SUCCESS_PAGE } from 'utils/constants'

export default class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_DOMAIN,
      clientID: process.env.REACT_APP_CLIENT_ID,
      redirectUri: process.env.REACT_APP_CLIENT_REDIRECT_URL,
      audience: process.env.REACT_APP_CLIENT_AUDIENCE,
      responseType: 'token id_token',
      scope: 'openid',
    })
  }

  login = () => {
    this.auth0.authorize()
  }

  /* eslint no-restricted-globals:0 */
  handleAuthentication = (callback) => {
    this.auth0.parseHash((err, authResults) => {
      if (err) {
        callback(LOGIN_FAILURE_PAGE)
        console.log(err)
      }

      if (authResults && authResults.accessToken && authResults.idToken) {
        let expiresAt = JSON.stringify(
          authResults.expiresIn * 1000 + new Date().getTime()
        )
        localStorage.setItem('access_token', authResults.accessToken)
        localStorage.setItem('id_token', authResults.idToken)
        localStorage.setItem('expires_at', expiresAt)
        location.hash = ''
        callback(LOGIN_SUCCESS_PAGE)
      }
    })
  }

  isAuthenticated = () => {
    let isAuth =
      localStorage.getItem('access_token') &&
      localStorage.getItem('id_token') &&
      localStorage.getItem('expires_at')
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt && isAuth
  }

  logout = (callback) => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    callback()
  }
}
