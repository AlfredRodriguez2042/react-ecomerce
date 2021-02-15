import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { IconButton } from '@material-ui/core'
import { useSelector } from 'react-redux'

const ButtonCart = () => {
  const state = useSelector((state) => state.cart.items)

  return (
    <div>
      <IconButton>
        {state.length > 0 ? <small>{state.length}</small> : null}

        <ShoppingCartIcon />
      </IconButton>
    </div>
  )
}

export default ButtonCart
