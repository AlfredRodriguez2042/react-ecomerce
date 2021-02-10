import { ADD_TO_CART } from '../types'

const initialState = {
  items: [],
}

export const addToCartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      // eslint-disable-next-line
      const exist = state.items.find((x) => x._id === payload._id)
      if (exist) {
        return {
          ...state,
          items: state.items.map((x) => (x._id === exist._id ? payload : x)),
        }
      }
      return {
        ...state,
        items: [...state.items, payload],
      }
    default:
      return state
  }
}
