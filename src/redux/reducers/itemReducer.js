import { ActionTypes } from '../constants';

const initialState = {
  items: [],
  buttonText: '',
};

export const itemReducer = (state = initialState.items, action) => {
  switch (action.type) {
    case ActionTypes.SET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case ActionTypes.FETCH_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export const selectedItemReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_ITEM:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const buttonReducer = (state = initialState.buttonText, action) => {
  switch (action.type) {
    case ActionTypes.SET_BUTTON:
      return {
        ...state,
        buttonText: action.payload,
      };
    default:
      return state;
  }
};
