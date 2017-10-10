import React from 'react';
import GoogleLogin from 'react-google-login';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

//cookies.set('myCat', 'Pacman', { path: '/' });
//console.log(cookies.get('myCat')); Pacman

const responseGoogle = (response) => {
  console.log(response);
  //console.log(response.profileObj.familyName);
  //console.log(response.profileObj.givenName);
  //console.log(response.profileObj.name);
  //alert("ATTEMPTING TO MOVE YOU");
  cookies.set('name', response.profileObj.name, { path: '/'});
  cookies.set('key', response.accessToken, {path: '/'});
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
      clientId="290518323911-f5ph5ghp1qr230r90f79p7sg2n5o0vn9.apps.googleusercontent.com"
      scope="https://www.googleapis.com/auth/classroom.courses"
      response_type="token"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={failureResponse}
    />
  </div>

export default IndexPage
