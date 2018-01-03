import React from 'react';

import GoogleLogin from 'react-google-login';

import Cookies from 'universal-cookie';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';

import {amber,blue,red} from 'material-ui/colors';

import Typography from 'material-ui/Typography';

import './index.css';



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



const theme = createMuiTheme ({

  palette: {

    primary: amber,

    secondary: blue

  },

  

  root: {

  flexGrow: 1,

  },



});



const IndexPage = () =>

<div>

  <div id='info'>

    <img id='img' src="https://lh3.googleusercontent.com/mIrjY5VWssd3-L8mVC0ALxDeUEhO0wzy88cgB0PQb3f9LI4DAPgObnAQ72rl9rvFcwgI=w300" alt="DUCKLINGS"/>
    <div id='login'>

          <GoogleLogin

            clientId="290518323911-f5ph5ghp1qr230r90f79p7sg2n5o0vn9.apps.googleusercontent.com"

            scope="https://www.googleapis.com/auth/classroom.courses https://www.googleapis.com/auth/classroom.coursework.me"

            response_type="token"

            prompt="select_account"

            buttonText="Login"

            onSuccess={responseGoogle}

            onFailure={failureResponse}

        />

        </div>

  </div>

</div>



export default IndexPage

