import customApi from '../../apis/api';
import { ActionTypes } from '../constants';

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      const response = await customApi.get('/item');
      // console.log(response);
      dispatch({
        type: ActionTypes.FETCH_ITEMS,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const setItems = (items) => {
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
