import { Button } from '@material-ui/core'
import React from 'react'

const Buttons = ({ stock }) => {
  console.log(stock)
  return (
    <div>
      <Button
        variant="contained"
        fullWidth
        style={{ marginBottom: '8px' }}
        color="primary"
        disabled={stock === 0}
      >
        Buy Now
      </Button>
      <Button
        variant="contained"
        fullWidth
        color="secondary"
        disabled={stock === 0}
      >
        Add To Cart
      </Button>
    </div>
  )
}

export default Buttons
