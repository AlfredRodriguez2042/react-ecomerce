import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductsAction } from '../../Redux/Actions/Products'

const Home = () => {
  const dispatch = useDispatch()
  const productsList = useSelector((state) => state.products)
  const { loading, error, products } = productsList
  useEffect(() => {
    dispatch(ProductsAction())
  }, [dispatch])
  console.log(productsList)
  if (loading) {
    return <h2>loading</h2>
  }
  if (error) {
    console.log(error)
  }

  return (
    <div>
      {products.map((product, i) => (
        <div key={i}>
          <div>{product.name}</div>
        </div>
      ))}
    </div>
  )
}

export default Home
