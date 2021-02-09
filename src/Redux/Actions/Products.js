//  import axios from 'axios'
import {
  GET_PRODUCTS_LIST,
  GET_PRODUCT_ID,
  PRODUCTS_ID_ERROR,
  PRODUCTS_ID_SUCCESS,
  PRODUCTS_LIST_ERROR,
  PRODUCTS_LIST_SUCCESS,
} from '../types'
import Data from '../../data'

export const getProductsAction = () => async (dispatch) => {
  dispatch({
    type: GET_PRODUCTS_LIST,
  })
  try {
    // const { data } = axios.get('/api/products')
    dispatch({
      type: PRODUCTS_LIST_SUCCESS,
      payload: Data.products,
    })
  } catch (error) {
    dispatch({
      type: PRODUCTS_LIST_ERROR,
      payload: error.message,
    })
  }
}
export const getProductId = (id) => async (dispatch) => {
  dispatch({
    type: GET_PRODUCT_ID,
  })
  const product = Data.products.find((product) => product._id === id)

  try {
    dispatch({
      type: PRODUCTS_ID_SUCCESS,
      payload: product,
    })

    //  const { data } = await axios.get(Data)
  } catch (error) {
    dispatch({
      type: PRODUCTS_ID_ERROR,
      payload: error.message,
    })
  }
}
