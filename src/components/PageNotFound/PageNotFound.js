import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import classes from './PageNotFound.module.scss';


const pageNotFound = () => (
  <div className={classes.PageNotFound}>

    <img className={classes.logo} src={logo} alt="Logo" />

    <h2 className="title">404 - Not Found</h2>

    <p>Sorry, the page you are looking for does not exist.</p>
    <p>
      You can always go back to the <Link to="/" className="link">homepage</Link>.
      </p>
  </div>
);
export default pageNotFound;
