import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Welcome from './welcome.jsx';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from "react-router";
import {
    Route,
    HashRouter,
    Redirect 
  } from "react-router-dom";
import { createBrowserHistory } from "history";
/* GLOBAL VARIABLES */

window.$primaryLanguage = 'en';
window.$secondaryLanguage = 'pl';
window.$primaryLanguageIconId = 'primary-lang-icon';
window.$secondaryLanguageIconId = 'secondary-lang-icon';

const history = createBrowserHistory();

ReactDOM.render(
<Router history={history}>
    <Welcome />
</Router>, document.getElementById('root'));
serviceWorker.register();
