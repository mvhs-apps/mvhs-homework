import React from 'react'
import GoogleLogin from 'react-google-login'

const responseGoogle = (response) => {
  alert(response);
}

const IndexPage = () =>
  <div>
    <h1>Login to your account</h1>
    <GoogleLogin
      clientId="745733918782-4iapqcau3m2v7qfmg4qfah1j75levbk5.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />
  </div>

export default IndexPage
