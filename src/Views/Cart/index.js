import React from 'react'
import { useSelector } from 'react-redux'
import CartContent from '../../Components/Cart/CartContent'
import Page from '../../Components/Base/Page'
import { Container, Grid } from '@material-ui/core'

const Cart = () => {
  const state = useSelector((state) => state.cart.items)

  return (
    <Page title=" Shopify | cart">
      <Container maxWidth="md">
        <Grid>
          <CartContent item={state} />
        </Grid>
      </Container>
    </Page>
  )
}

export default Cart
