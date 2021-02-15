const { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } = require('../types')

export const loginUserAcction = () => (dispatch) => {
  dispatch({
    type: LOGIN_USER,
  })
  try {
    const storage = localStorage.getItem('x-token')
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: JSON.parse(storage),
    })
  } catch (error) {
    dispatch({
      type: LOGIN_USER_ERROR,
      payload: error,
    })
  }
}
