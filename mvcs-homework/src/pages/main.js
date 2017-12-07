import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Link from 'gatsby-link';
import Cookies from 'universal-cookie';
import "isomorphic-fetch";
import { render } from 'react-dom';
import './style.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { amber, blue, red } from 'material-ui/colors';
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

//Logic code
const cookies = new Cookies();

var name = (cookies.get('name'));
var key = (cookies.get('key'));
console.log(key);

//MUI and rendering code

function TabContainer(props) {
  return <div style={{ padding: 8 * 3 }}>{props.children}</div>;
}

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: blue
  },
  root: {
    flexGrow: 1,
  },

});

class CenteredTabs extends React.Component {
  state = {
    value: 0,
  };
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      value: 0,
      root: "loading..."
    };
  };

  handleChange = (event, value) => {
    this.setState({ value: value });
  };

  componentDidMount() {
    async function loadTest() {
      try {
        const response = await fetch('https://classroom.googleapis.com/v1/courses?access_token=' + key);
      const json = await response.json();
      console.log(json);
      var coursemax = 4;
      var length = coursemax;
      var ctext = [length];
      var ctext2 = [length];
      var counter1 = 0;
      var coursework;
      var coursejson;
      var courses = [];
      var counter2 = 0;
      for(counter1 in json.courses){
        coursework = await fetch('https://classroom.googleapis.com/v1/courses/' +json.courses[counter1].id+'/courseWork?access_token='+key);
        coursejson = await coursework.json();
        courses[counter1]=coursejson;
      }
      console.log(courses);
      counter1 = 0;
      for(counter2 in courses){
        ctext[counter2] = "";
        for(counter1 in courses[counter2].courseWork){
          
          if (counter1<coursemax){
            ctext[counter2] += "<p>"+courses[counter2].courseWork[counter1].title+"</p>";
          }
        }
        document.getElementById('rootname'+counter2).innerHTML = json.courses[counter2].name+'</b>'+':'+'<br/>';;

      }

      for(counter2 in ctext){
        document.getElementById('root'+counter2).innerHTML = ctext[counter2];
      }
      } catch(err) {
        console.log(err);
    }
    }
    loadTest();
  }

  render() {
    const { div } = this.props;
    const { value } = this.state;

    return (
      <MuiThemeProvider theme={theme} >
        <div className={div}>
          <AppBar position="static" id='title'>
            <Toolbar>
              <Typography type="title" color='inherit'>
                MVHS Homework App
            </Typography>
              <div id='avatar' color='inherit'><Avatar>A</Avatar></div>
            </Toolbar>
            <Tabs value={value} onChange={this.handleChange} centered>
              <Tab label={<AssignmentIcon />} id='icon' />
              <Tab label={<NoteIcon />} id='icon' />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>
            <Paper id='calendar'>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><p id="rootname0">Loading... </p></TableCell>
                    <TableCell><p id="root0"></p></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><p id="rootname1"></p></TableCell>
                    <TableCell><p id="root1"></p></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><p id="rootname2"></p></TableCell>
                    <TableCell><p id="root2"></p></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><p id="rootname3"></p></TableCell>
                    <TableCell><p id="root3"></p></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><p id="rootname4"></p></TableCell>
                    <TableCell><p id="root4"></p></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><p id="rootname5"></p></TableCell>
                    <TableCell><p id="root5"></p></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><p id="rootname6"></p></TableCell>
                    <TableCell><p id="root6"></p></TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </Paper>
          </TabContainer>}
          {value === 1 && <TabContainer>
            There is no API for Google Keep... Sadness...
          </TabContainer>}
        </div>
      </MuiThemeProvider>
    );
  }
}

CenteredTabs.propTypes = {
  div: PropTypes.object.isRequired,
};

export default App;
