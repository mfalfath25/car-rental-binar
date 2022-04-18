import { combineReducers } from 'redux';
import { itemReducer, selectedItemReducer, buttonReducer } from './itemReducer';

const rootReducer = combineReducers({
  items: itemReducer,
  selectedItem: selectedItemReducer,
  buttonText: buttonReducer,
});

export default rootReducer;
