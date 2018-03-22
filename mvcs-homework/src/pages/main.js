import React from 'react';
import Link from 'gatsby-link';
import Cookies from 'universal-cookie';
import "isomorphic-fetch";
const cookies = new Cookies();
var name = (cookies.get('name'));
var key = (cookies.get('key'));
console.log(key);

class Homework {
  async loadTest() {
    try {
      const response = await fetch('https://classroom.googleapis.com/v1/courses?access_token=' + key);
      const json = await response.json();
      console.log(json);
      var coursemax = 4;
      var ctext= [coursemax*8];
      var ctext2 = [coursemax*8];
      var counter1, counter2 = 0;
      var coursework, coursejson;
      var courses = [];
      for (counter1 in json.courses){
        coursework = await fetch('https://classroom.googleapis.com/v1/courses/' +json.courses[counter1].id+'/courseWork?access_token='+key);
        coursejson = await coursework.json();
        courses[counter1]=coursejson;
      }
      console.log(courses);
      counter1 = 0;
      for(counter2 in courses){
        for(counter1 in courses[counter2].courseWork){
          if (counter1<=coursemax){
            ctext[counter1] = "<p>"+courses[counter2].courseWork[counter1].title+"</p>";
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
}
var app = new Homework();
app.loadTest();
const LoginPage = () =>
  <div>
    <h1>Welcome {name}</h1>
    <p id = "rootname0">Loading</p>
    <p id = "root0"></p>
    <p id = "rootname1"></p>
    <p id = "root1"></p>
    <p id = "rootname2"></p>
    <p id = "root2"></p>
    <p id = "rootname3"></p>
    <p id = "root3"></p>
    <p id = "rootname4"></p>
    <p id = "root4"></p>
    <p id = "rootname5"></p>
    <p id = "root5"></p>
    <p id = "rootname6"></p>
    <p id = "root6"></p>
    <p id = "rootname7"></p>
    <p id = "root7"></p>
  </div>
export default LoginPage
