import React from 'react';
import Link from 'gatsby-link';
import Cookies from 'universal-cookie';
import "isomorphic-fetch";

const cookies = new Cookies();

var name = (cookies.get('name'));
var key = (cookies.get('key'));

class Alex {
  async loadTest() {
    try {
      const response = await fetch('https://classroom.googleapis.com/v1/courses?access_token=' + key);
      const json = await response.json();
      document.getElementById('root').innerHTML = json.courses[1].name;
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
    <p>Hello</p>
    <p id = "root">If this shows then we have a problem or the courses are in console</p>
  </div>

export default LoginPage