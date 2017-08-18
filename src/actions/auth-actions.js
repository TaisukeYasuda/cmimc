import fetch from 'isomorphic-fetch';
import { 
  AUTH_USER,  
  AUTH_ERROR, 
  UNAUTH_USER 
} from './types';

const API_URL = 'http://localhost:8000';

/*******************************************************************************
 * Synchronous actions.
 ******************************************************************************/

export function authErrHandler(dispatch, errMessage) {
  dispatch({ type: AUTH_ERROR, payload: errMessage });
}

export function logoutUser(dispatch) {
  localStorage.removeItem('token');
  dispatch({ type: UNAUTH_USER });
}

/*******************************************************************************
 * Async thunk actions.
 ******************************************************************************/

export function loginUser({ email, password }) {
  return dispatch => {
    fetch(`${API_URL}/login`, {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(
      res => {
        return res.json()
        .then(data => {
          if (!data.success) authErrHandler(dispatch, data.message);
          else {
            localStorage.setItem('token', data.token);
            dispatch({ type: AUTH_USER, payload: { name: data.name }});
            alert('logged in!');
          }
        });
      }, 
      err => {
        errMessage = err.message || 'Failed to communicate with server.';
        authErrHandler(dispatch, errMessage);
      }
    );
  }
}

export function registerUser({ email, name, andrewid, password }) {
  return dispatch => {
    fetch(`${API_URL}/register`, {
      method: 'post',
      body: JSON.stringify({ email, name, andrewid, password }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(
      res => {
        return response.json()
        .then(data => {
          if (!data.success) authErrHandler(dispatch, data.message);
          else {
            localStorage.setItem('token', data.token);
            dispatch({ type: AUTH_USER, payload: { name: data.name }});
            alert('registered and logged in!');
          }
        });
      },
      err => {
        errMessage = err.message || 'Failed to communicate with server.';
        authErrHandler(dispatch, errMessage);
      }
    );
  }
}


