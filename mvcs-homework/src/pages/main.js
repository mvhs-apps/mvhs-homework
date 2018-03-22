import React from 'react';
import Link from 'gatsby-link';
import Cookies from 'universal-cookie';
import "isomorphic-fetch";
const cookies = new Cookies();
var name = (cookies.get('name'));
var key = (cookies.get('key'));
console.log(key);

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
  <div>
    <h1>Welcome {name}</h1>
    <p id="class1">Loading</p>
    <p id="class1info"></p>
    <p id="class2"></p>
    <p id="class2info"></p>
    <p id="class3"></p>
    <p id="class3info"></p>
    <p id="class4"></p>
    <p id="class4info"></p>
    <p id="class5"></p>
    <p id="class5info"></p>
    <p id="class6"></p>
    <p id="class6info"></p>
    <p id="class7"></p>
    <p id="class7info"></p>
    <p id="class8"></p>
    <p id="class8info"></p>
  </div>
export default LoginPage
