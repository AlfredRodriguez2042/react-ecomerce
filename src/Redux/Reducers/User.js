import { LOGIN_USER, LOGIN_USER_ERROR, LOGIN_USER_SUCCESS } from '../types'

const initialState = {
  loading: false,
  isAuth: false,
  user: {
    role: '',
  },
}

export const loginUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return { ...state, loading: true }
    case LOGIN_USER_SUCCESS:
      return {
        loading: false,
        isAuth: true,
        user: payload,
      }
    case LOGIN_USER_ERROR:
      return {
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}
