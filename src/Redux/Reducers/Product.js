import {
  GET_PRODUCTS_LIST,
  GET_PRODUCT_ID,
  PRODUCTS_ID_ERROR,
  PRODUCTS_ID_SUCCESS,
  PRODUCTS_LIST_ERROR,
  PRODUCTS_LIST_SUCCESS,
} from '../types'

const initialState = {
  products: [],
  product: {},
}

export const ProductsList = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_PRODUCTS_LIST:
      return { loading: true }
    case PRODUCTS_LIST_SUCCESS:
      return {
        loading: false,
        products: payload,
      }

    case PRODUCTS_LIST_ERROR:
      return {
        loading: false,
        error: payload,
      }

    default:
      return state
  }
}

export const getProductId = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_ID:
      return { loading: true }
    case PRODUCTS_ID_SUCCESS:
      return { loading: false, product: payload }
    case PRODUCTS_ID_ERROR:
      return { loading: false, error: payload }
    default:
      return state
  }
}
