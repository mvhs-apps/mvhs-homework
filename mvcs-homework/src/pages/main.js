import React from 'react';
import Link from 'gatsby-link';
import Cookies from 'universal-cookie';
import "isomorphic-fetch";

const cookies = new Cookies();

var name = (cookies.get('name'));
var key = (cookies.get('key'));
console.log(key);

class Alex {
  async loadTest() {
    try {
      const response = await fetch('https://classroom.googleapis.com/v1/courses?access_token=' + key);
      const json = await response.json();
      console.log(json);
      document.getElementById('root').innerHTML = json.courses[1].name;
      //In the next fetch line you must specify which course you want to access. Send me a slack message if you need help. -Alex
      const coursework = await fetch('https://classroom.googleapis.com/v1/courses/' +json.courses[3].id+'/courseWork?access_token='+key)
      const coursejson = await coursework.json();
      console.log(coursejson);
      } catch(err) {
        console.log(err);
    }
  }
}

var al = new Alex();
al.loadTest();

const LoginPage = () =>
  <div>
    <h1>Welcome {name}</h1>

    <p id = "root">If this shows then we have a problem or the courses are in console</p>
  </div>

export default LoginPage