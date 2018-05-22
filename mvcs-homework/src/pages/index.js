import GoogleLogin from 'react-google-login';
import Cookies from 'universal-cookie';
import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import {amber,blue,red} from 'material-ui/colors';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Tabs, { Tab } from 'material-ui/Tabs';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import DateRangeIcon from 'material-ui-icons/DateRange';
import AssignmentIcon from 'material-ui-icons/Assignment';
import NoteIcon from 'material-ui-icons/Note';

const cookies = new Cookies();

const theme = createMuiTheme ({
  palette: {
    primary: amber,
    secondary: blue
  },
  root: {
  flexGrow: 1,
  },

});

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

  <MuiThemeProvider theme={theme}>

    <div>

      <AppBar position="static" id='title'>

        <Toolbar>

          <Typography type="title" color='inherit'>

            MVHS Homework App

            </Typography>
              <div id='button'>

                <GoogleLogin

             clientId="9612881117734-6mc2m5t76cv10nrmpfjcc7pit28mk7tk.apps.googleusercontent.com"
//290518323911-f5ph5ghp1qr230r90f79p7sg2n5o0vn9.apps.googleusercontent.com
              
                  scope="https://www.googleapis.com/auth/classroom.courses https://www.googleapis.com/auth/classroom.coursework.me"

                  response_type="token"

                  prompt="select_account"

                  buttonText="Login"

                  class="google"

                  onSuccess={responseGoogle}

                  onFailure={failureResponse} 

                />
              </div>

        </Toolbar>

      </AppBar>

    </div>

  </MuiThemeProvider>

export default IndexPage
