import React from 'react'
import Link from 'gatsby-link'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

var name = (cookies.get('name'));
var key = (cookies.get('key'));
alert(key);

const LoginPage = () =>
  <div>
    <h1>Welcome {name}</h1>
    
  </div>

export default LoginPage
