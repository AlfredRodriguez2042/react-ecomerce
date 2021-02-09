import {
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductId } from '../../../Redux/Actions/Products'
import Page from '../../Base/Page'
import Buttons from './Buttons'
import Status from './Status'

const useStyles = makeStyles(() => ({
  img: {
    width: '100%',
    height: '100%',
  },
}))

const SingleProduct = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { id } = useParams()
  const ProductId = useSelector((state) => state.productId)
  const { error, loading, product } = ProductId
  console.log(product)
  useEffect(() => {
    dispatch(getProductId(id))
  }, [dispatch, id])
  if (loading) {
    return <h2>loading</h2>
  }
  if (error) {
    console.log(error)
  }
  return (
    <div>
      <Page title={product.name}>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper elevation={0}>
                <img
                  className={classes.img}
                  src={product.image}
                  alt={product.name}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {product.name}
                    </Typography>
                    <Rating defaultValue={product.rating} size="small" />
                    <span>reviews: {product.numReviews}</span>
                    <Typography variant="subtitle1" paragraph>
                      Price: $ {product.price}
                    </Typography>
                    <Status stock={product.countInStock} />
                    <Typography>Stock: {product.countInStock}</Typography>
                    <Typography variant="subtitle1">
                      Description: {product.description}
                      <br />
                      Continue reading...
                    </Typography>

                    <Buttons stock={product.countInStock} />
                  </CardContent>
                </div>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Page>
    </div>
  )
}

export default SingleProduct
