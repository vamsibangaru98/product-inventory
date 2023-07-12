import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserActions from './actions/UserActions'
import Cookies from 'js-cookie'

let currentUser = Cookies.get('currentUser')
if(currentUser!= undefined) {
  UserActions.signinUser(currentUser)
}

ReactDOM.render(
  
  <App />,
  document.getElementById('root')
);


serviceWorker.unregister();
