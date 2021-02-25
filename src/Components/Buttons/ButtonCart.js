import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { Badge, IconButton } from '@material-ui/core'
import { useSelector } from 'react-redux'

const ButtonCart = () => {
  const state = useSelector((state) => state.cart.items)

  return (
    <div>
      <IconButton>
        <Badge badgeContent={state.length} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </div>
  )
}

export default ButtonCart
