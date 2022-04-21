import { combineReducers } from 'redux';
import {
  itemReducer,
  selectedItemReducer,
  buttonReducer,
  carReducer,
  selectedCarReducer,
} from './itemReducer';

const rootReducer = combineReducers({
  items: itemReducer,
  cars: carReducer,
  selectedItem: selectedItemReducer,
  selectedCar: selectedCarReducer,
  buttonText: buttonReducer,
});

export default rootReducer;
