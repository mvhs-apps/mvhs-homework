import React from 'react'
import Link from 'gatsby-link'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

var name = (cookies.get('name'));

const LoginPage = () =>
  <div>
    <h1>Welcome {name}</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>

export default LoginPage
