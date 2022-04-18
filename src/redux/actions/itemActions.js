import axios from 'axios';
import { ActionTypes } from '../constants';

// export const fetchItem = () => ({
//   const response = await axios.get(/)
// });

export const setItem = (items) => {
  return {
    type: ActionTypes.SET_ITEMS,
    payload: items,
  };
};

export const selectedItem = (item) => {
  return {
    type: ActionTypes.SELECTED_ITEM,
    payload: item,
  };
};

export const setButton = (button) => {
  return {
    type: ActionTypes.SET_BUTTON,
    payload: button,
  };
};
