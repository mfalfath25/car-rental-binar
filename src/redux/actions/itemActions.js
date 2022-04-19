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

export const fetchItem = (id) => {
  return async (dispatch) => {
    try {
      const response = await customApi.get(`/item/${id}`);
      // console.log(response);
      dispatch({
        type: ActionTypes.SELECTED_ITEM,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const setButton = (button) => {
  return {
    type: ActionTypes.SET_BUTTON,
    payload: button,
  };
};
