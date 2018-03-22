import Link from 'gatsby-link';
import Cookies from 'universal-cookie';
import "isomorphic-fetch";
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
var name = (cookies.get('name'));
var key = (cookies.get('key'));
console.log(key);

const theme = createMuiTheme ({
  palette: {
    primary: amber,
    secondary: blue
  },
  root: {
  flexGrow: 1,
  },

});

function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

class Homework {
  async loadTest() {
    try {
      const response = await fetch('https://classroom.googleapis.com/v1/courses?access_token=' + key);
      const json = await response.json();
      console.log(json);
      for(var i = 0; i < json.courses.length; i++) {
        //console.log("did for "+json.courses[i].name);
        document.getElementById("class"+(i+1).toString()).innerHTML = json.courses[i].name;

        var res2 = await fetch('https://classroom.googleapis.com/v1/courses/' +json.courses[i].id+'/courseWork?access_token='+key);
        var json2 = await res2.json();
        console.log(json2);
        if(!isEmpty(json2)) {      
          var final = "";
          //console.log(json2.courseWork[0].title);
          final += json2.courseWork[0].title;
          document.getElementById("class"+(i+1).toString()+"info").innerHTML = final; 
        }
      }
    } catch(err) {
      console.log(err);
    }
  }
}
var app = new Homework();
app.loadTest();
const LoginPage = () =>
<MuiThemeProvider theme={theme}>
      <div>
        <AppBar position="static" id='title'>
          <Toolbar>
            <Typography type="title" color='inherit'>
              MVHS Homework App
            </Typography>
            <div id='avatar' color='inherit'><Avatar>A</Avatar></div>
          </Toolbar>
        </AppBar>
        <Paper id='calendar'>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><p id = "class1"></p></TableCell>
                <TableCell><p id = "class1info"></p></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><p id = "class2"></p></TableCell>
                <TableCell><p id = "class2info"></p></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><p id = "class3"></p></TableCell>
                <TableCell><p id = "class3info"></p></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><p id = "class4"></p></TableCell>
                <TableCell><p id = "class4info"></p></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><p id = "class5"></p></TableCell>
                <TableCell><p id = "class5info"></p></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><p id = "class6"></p></TableCell>
                <TableCell><p id = "class6info"></p></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><p id = "class7"></p></TableCell>
                <TableCell><p id = "class7info"></p></TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </Paper>
      </div>
    </MuiThemeProvider>
  
export default LoginPage
