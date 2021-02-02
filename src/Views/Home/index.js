import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductsAction } from '../../Redux/Actions/Products'
import Page from '../../Components/Base/Page'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100%',
  },
}))

const Home = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const productsList = useSelector((state) => state.products)
  const { loading, error, products } = productsList
  useEffect(() => {
    dispatch(ProductsAction())
  }, [dispatch])

  if (loading) {
    return <h2>loading</h2>
  }
  if (error) {
    console.log(error)
  }

  return (
    <Page title="Shopify" className={classes.root}>
      {products.map((product, i) => (
        <div key={i}>
          <div>{product.name}</div>
        </div>
      ))}
    </Page>
  )
}

export default Home
