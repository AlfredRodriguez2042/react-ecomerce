//  import axios from 'axios'
import {
  GET_PRODUCTS_LIST,
  PRODUCTS_LIST_ERROR,
  PRODUCTS_LIST_SUCCESS,
} from '../types'
import data from '../../data'

export const ProductsAction = () => async (dispatch) => {
  dispatch({
    type: GET_PRODUCTS_LIST,
  })
  try {
    // const { data } = axios.get('/api/products')
    dispatch({
      type: PRODUCTS_LIST_SUCCESS,
      payload: data.products,
    })
  } catch (error) {
    dispatch({
      type: PRODUCTS_LIST_ERROR,
      payload: error.message,
    })
  }
}
