import { combineReducers } from 'redux';
import loginReducer from '../login/store/loginReducer.js';
// import { routerReducer } from 'react-router-redux';

export const reducers = combineReducers({
  loginReducer
});

export default reducers;