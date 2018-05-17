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
import firebase from 'firebase'

const cookies = new Cookies();
var name = (cookies.get('name'));
var key = (cookies.get('key'));
console.log(key);
 var config = {
    apiKey: "AIzaSyCanm_X6eh2YOvmpOJEMJvi2_2rIv7w2UU",
    authDomain: "test-9f630.firebaseapp.com",
    databaseURL: "https://test-9f630.firebaseio.com",
    projectId: "test-9f630",
    storageBucket: "test-9f630.appspot.com",
    messagingSenderId: "673468303307"
  };
  firebase.initializeApp(config);
const theme = createMuiTheme ({
  palette: {
    primary: amber,
    secondary: blue
  },
  root: {
  flexGrow: 1,
  },

});

class Homework {
  async loadTest() {
    try {
      //grab courses
      const response = await fetch('https://classroom.googleapis.com/v1/courses?access_token=' + key);
      const json = await response.json();
      //coursemax vars will eventually be user defined
      var coursemax = [2, 2, 2, 2, 2, 2, 2, 2];
      
      if(json.courses!=null){
        for(var course =0;course<json.courses.length&&course<9;course++ ){
          //grab course info
          var coursework = await fetch('https://classroom.googleapis.com/v1/courses/' +json.courses[course].id+'/courseWork?access_token='+key);
          var coursejson = await coursework.json();
          console.log(coursejson);
          var assignment ="";
          for(var assignmentnum in coursejson.courseWork){
            if (assignmentnum<=coursemax[course]-1){
              //add in assignment
              assignment += "<p>" +coursejson.courseWork[assignmentnum].title+"</p>";
              //"Due: "+coursejson.courseWork[assignmentnum].dueDate.month+"/"+coursejson.courseWork[assignmentnum].dueDate.day
            }
          }
          //making ids to render
          document.getElementById('class'+(course+1)+'info').innerHTML = assignment;
          document.getElementById('class'+(course+1)).innerHTML = json.courses[course].name+'</b>'+':'+'<br/>';;
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
            <div id='avatar' color='inherit'><Avatar>{name[0]}</Avatar></div>
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
