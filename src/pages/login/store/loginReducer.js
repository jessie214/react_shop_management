import { LOGIN_DATA } from './loginActionType';
const defaultState = {
  loginState: [],
}

const getValue = (state,action) => {  
  return { ...state, loginState: action.data.status};  
}
const loginReducer = (state=defaultState, action) => {
  switch(action.type) {
    case LOGIN_DATA: return getValue(state, action);
    default: return state;
  }
}
export default loginReducer;

