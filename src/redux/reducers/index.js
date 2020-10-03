import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import { EXPIRE_SESSION } from '../actions/actionTypes';

const appReducer = combineReducers({
  sessionReducer
})

const rootReducer = (state, action) => {
  if (action.type === EXPIRE_SESSION) {
    state = undefined;
  }

  return appReducer(state, action);
}

export default rootReducer;
