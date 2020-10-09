import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import calendarReducer from './calendarReducer';
import { EXPIRE_SESSION } from '../actions/actionTypes';

const appReducer = combineReducers({
  sessionReducer,
  calendarReducer
})

const rootReducer = (state, action) => {
  if (action.type === EXPIRE_SESSION) {
    state = undefined;
  }

  return appReducer(state, action);
}

export default rootReducer;
