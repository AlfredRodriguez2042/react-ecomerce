import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    width: '290px',
    maxWidth: '345px',
  },
  cardMedia: {
    height: 350,
    paddingTop: '56.25%', // 16:9
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
  },
}))

export const ProductContent = ({ product }) => {
  const classes = useStyles()
  return (
    <Grid align="center" item xs={12} sm={6} md={4} lg={4}>
      <Link to={`/product/${product._id}`} className={classes.link}>
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia} image={product.image} />
          <CardContent>
            <Typography variant="h5" align="center" component="h2">
              {product.name}
            </Typography>
            <Rating rating={product.rating} reviews={product.numReviews} />
            <Typography align="center">{product.description}</Typography>
            <div>
              <Typography>${product.price}</Typography>
              <Typography>{product.brand}</Typography>
            </div>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  )
}
