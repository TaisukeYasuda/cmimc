import { INIT_APP, RequestStatuses } from '../actions/types';

const INITIAL_STATE = { 
  error: false, 
  message: '', 
  pending: false,
  info: {},
  news: {}
};

export default function (state = INITIAL_STATE, action) {  
  switch(action.type) {
    case INIT_APP:
      if (action.payload.error) 
        return { 
          ...state, 
          error: true, 
          pending: false,
          message: action.payload.message
        };
      else if (action.payload.status === RequestStatuses.PENDING)
        return { 
          ...state, 
          error: false, 
          pending: true
        };
      else if (action.payload.status === RequestStatuses.SUCCESS)
        return { 
          ...state, 
          error: false, 
          pending: false,
          [action.payload.field]: action.payload.data
        };
    default:
      return state;
  }
}
