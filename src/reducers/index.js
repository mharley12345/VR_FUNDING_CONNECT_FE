  
import { combineReducers } from 'redux';
import {reducer} from './userReducers'
import { loginReducer } from './loginReducer';
import { registerReducer } from './registerReducer';

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  reducer
});

export default rootReducer;