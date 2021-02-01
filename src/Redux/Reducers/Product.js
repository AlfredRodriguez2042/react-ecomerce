import {
  GET_PRODUCTS_LIST,
  PRODUCTS_LIST_ERROR,
  PRODUCTS_LIST_SUCCESS,
} from '../types'

const initialState = {
  products: [],
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
