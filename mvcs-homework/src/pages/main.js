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
      var ctext ="";
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
        ctext += (Number(counter2)+1)+'. '+'<b>'+json.courses[counter2].name+'</b>'+':'+'<br/>';
        for(counter1 in courses[counter2].courseWork){
          ctext += "<p>"+courses[counter2].courseWork[counter1].title+"</p>";
        }
      }
      document.getElementById('root').innerHTML = 'This is the work in each of your classes:'+'<br/>'+ctext;
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

    <p id = "root">If this shows then we have a problem or the courses are in console</p>
    <p id = "root1"></p>
  </div>

export default LoginPage
