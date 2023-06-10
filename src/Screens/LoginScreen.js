import React from 'react'
import './LoginScreen.css'

const LoginScreen = (props) => {
  return (
    <div class="login-page">
  <div class="form">
    <form class="login-form">
      <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Password"/>
      <button className='login-btn'>login</button>
      <p class="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>

  )
}


export default LoginScreen;