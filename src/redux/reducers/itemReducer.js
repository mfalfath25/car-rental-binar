import { ActionTypes } from '../constants';

const initialState = {
  items: [],
  cars: [],
  buttonText: '',
};

export const itemReducer = (state = initialState.items, action) => {
  switch (action.type) {
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

export const carReducer = (state = initialState.cars, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_CARS:
      return {
        ...state,
        cars: action.payload,
      };
    default:
      return state;
  }
};

export const selectedCarReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_CAR:
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
