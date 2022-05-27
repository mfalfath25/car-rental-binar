import mockApi from '../../apis/mockApi'
import carApi from '../../apis/carApi'
import newApi from '../../apis/newApi'
import { ActionTypes } from '../constants'

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      const response = await newApi.get('/')
      // console.log(response);
      dispatch({
        type: ActionTypes.FETCH_ITEMS,
        payload: response.data,
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export const fetchItem = (id) => {
  return async (dispatch) => {
    try {
      const response = await newApi.get(`/${id}`)
      // console.log(response);
      dispatch({
        type: ActionTypes.SELECTED_ITEM,
        payload: response.data,
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export const fetchCars = () => {
  return async (dispatch) => {
    try {
      const response = await carApi.get('/car')
      // console.log(response);
      dispatch({
        type: ActionTypes.FETCH_CARS,
        payload: response.data,
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export const fetchCar = (id) => {
  return async (dispatch) => {
    try {
      const response = await carApi.get(`/${id}`)
      // console.log(response);
      dispatch({
        type: ActionTypes.FETCH_CAR,
        payload: response.data,
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export const setButton = (button) => {
  return {
    type: ActionTypes.SET_BUTTON,
    payload: button,
  }
}
