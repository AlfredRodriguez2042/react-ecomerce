import { makeStyles } from '@material-ui/core'
import { Rating as Rate } from '@material-ui/lab'
import React from 'react'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

const Rating = ({ rating, reviews }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <span>
        <Rate defaultValue={rating} precision={0.5} />
      </span>
      <span>{reviews} reviews</span>
    </div>
  )
}

export default Rating
