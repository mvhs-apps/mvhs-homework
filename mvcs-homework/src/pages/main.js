import React from 'react'
import Link from 'gatsby-link'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

var name = (cookies.get('name'));
var key = (cookies.get('key'));
console.log(key);

const token = key

fetch('https://classroom.googleapis.com/v1/courses?access_token=' + key, {
  method:'GET'
})
.then(res => res.json())
.then(json => console.log(json));
// .then(function(data){
//   document.getElementById('root').innerHTML = data.courses[0].name
// });
const LoginPage = () =>
  <div>
    <h1>Welcome {name}</h1>
    <p id = "root">If this shows then we have a problem</p>
  </div>

export default LoginPage
