import React from 'react'
import GoogleLogin from 'react-google-login'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

//cookies.set('myCat', 'Pacman', { path: '/' });
//console.log(cookies.get('myCat')); Pacman

const responseGoogle = (response) => {
  //console.log(response);
  //console.log(response.profileObj.familyName);
  //console.log(response.profileObj.givenName);
  //console.log(response.profileObj.name);
  //alert("ATTEMPTING TO MOVE YOU");
  cookies.set('name', response.profileObj.name, { path: '/'});
  //alert(cookies.get('name'));
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
      onFailure={failureResponse}
    />
  </div>

export default IndexPage
