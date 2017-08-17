import fetch from 'isomorphic-fetch';
import { normalize } from 'normalizr';

import { INIT_APP, RequestStatuses } from './types';

const DATA_URL = 'data';

/*******************************************************************************
 * Utilities.
 ******************************************************************************/

const fetchData = (endpoint, field) => {
  return dispatch => {
    fetch(`${DATA_URL}/${endpoint}`, { method: 'get' })
    .then(
      res => {
        return res.json()
        .then(data => {
          dispatch({ 
            type: INIT_APP,
            payload: { 
              status: RequestStatuses.SUCCESS, 
              field: field, 
              data: data 
            }
          });
        });
      }, 
      err => {
        errMessage = err.message || 'Failed to communicate with server.';
        initErrHandler(errMessage)(dispatch);
      }
    );
  }
};

/*******************************************************************************
 * Actions creators.
 ******************************************************************************/

export function initErrHandler(errMessage) {
  return dispatch => {
    dispatch({
      type: INIT_APP,
      payload: {
        error: true,
        message: errMessage
      }
    });
  }
}

export function initApp() {
  return dispatch => {
    dispatch({ 
      type: INIT_APP, 
      payload: { status: RequestStatuses.PENDING }
    });
    fetchData('info.json', 'info')(dispatch);
    fetchData('news.json', 'news')(dispatch);
    fetchData('archive.json', 'archive')(dispatch);
    fetchData('staff.json', 'staff')(dispatch);
  }
}
