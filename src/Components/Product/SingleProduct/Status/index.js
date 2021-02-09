import { Typography } from '@material-ui/core'
import React from 'react'

const Status = ({ stock }) => {
  return (
    <>
      Status:{' '}
      {stock > 0 ? (
        <Typography component="span" variant="body2" color="secondary">
          In Stock
        </Typography>
      ) : (
        <Typography component="strong" color="error">
          Unavailable
        </Typography>
      )}
    </>
  )
}

export default Status
