import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    marginBottom: '16px',
  },
  image: {
    width: '140px',
    height: '140px',
    marginRight: '32px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

const CartContent = ({ item }) => {
  const classes = useStyles()
  console.log(item)
  return (
    <>
      {item.map((item, i) => (
        <Card key={i} className={classes.root}>
          <CardMedia
            className={classes.image}
            image={item.image}
            title={item.name}
          />
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {item.name}
            </Typography>
            <Typography>{item.description}</Typography>
            <Typography>$ {item.price}</Typography>
            <Typography>Quantity: {item.quantity}</Typography>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

export default CartContent
