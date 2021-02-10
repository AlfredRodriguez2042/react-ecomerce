import { ADD_TO_CART } from '../types'

export const addToCartAction = (item, quantity) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        name: item.name,
        image: item.image,
        price: item.price,
        _id: item._id,
        quantity,
      },
    })
  } catch (error) {
    console.log(error)
  }
}
