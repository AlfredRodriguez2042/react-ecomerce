import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const state = useSelector((state) => state.cart.items)
  console.log(state)
  return <div>hola</div>
}

export default Cart
