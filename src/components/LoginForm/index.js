import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.push('/')
  }

  onSubmit = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      msg = 'Username not found!'
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password} = this.state

    return (
      <div className="loginform-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login-img"
        />
        <form onSubmit={this.onSubmit} className="form-container">
          <div className="label-input-box">
            <label htmlFor="username" className="input-title">
              USERNAME
            </label>
            <br />
            <input
              type="text"
              value={username}
              id="username"
              onChange={this.onChangeUsername}
              className="input-container"
              placeholder="Username"
            />
          </div>
          <div className="label-input-box">
            <label htmlFor="password" className="input-title">
              PASSWORD
            </label>
            <br />
            <input
              type="password"
              value={password}
              id="password"
              onChange={this.onChangePassword}
              className="input-container"
              placeholder="Password"
            />
            <br />
          </div>
          <br />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
