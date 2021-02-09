import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsAction } from '../../Redux/Actions/Products'
import Page from '../../Components/Base/Page'
import { Container, Grid } from '@material-ui/core'

import { ProductContent } from '../../Components/Product'

const Home = () => {
  const dispatch = useDispatch()
  const productsList = useSelector((state) => state.products)
  const { loading, error, products } = productsList
  useEffect(() => {
    dispatch(getProductsAction())
  }, [dispatch])

  if (loading) {
    return <h2>loading</h2>
  }
  if (error) {
    console.log(error)
  }

  return (
    <Page title="Shopify">
      <Container>
        <Grid container justify="center" spacing={3}>
          {products.map((product, i) => (
            <ProductContent key={i} product={product} />
          ))}
        </Grid>
      </Container>
    </Page>
  )
}

export default Home
