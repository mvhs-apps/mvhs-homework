import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import {amber,blue,red} from 'material-ui/colors';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Cookies from 'universal-cookie';

import './index.css';

const theme = createMuiTheme ({
    palette: {
      primary: amber,
      secondary: blue
    },
    root: {
    flexGrow: 1,
    },
  });

const Header = () =>
<div>
<MuiThemeProvider theme={theme}>
    <AppBar id='title' color='primary'>
    
      <Typography type='title'>MVHS Homework App</Typography>
    </AppBar>
  </MuiThemeProvider>
</div>
const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="MVHS Homework App"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
