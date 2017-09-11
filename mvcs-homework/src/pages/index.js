import React from 'react'
import GoogleLogin from 'react-google-login'

const responseGoogle = (response) => {
  //console.log(response);
  //console.log(response.profileObj.familyName);
  //console.log(response.profileObj.givenName);
  //console.log(response.profileObj.name);
  //alert("ATTEMPTING TO MOVE YOU");
  window.location.href = "./main";
}

const failureResponse = (response) => {
  console.log(response);
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
