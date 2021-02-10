import { lazy } from 'react'
import { SingleProduct } from '../Components/Product'

const Home = lazy(() => import('../Views/Home'))
const Cart = lazy(() => import('../Views/Cart'))
const SingUp = lazy(() => import('../Views/SignUp'))
const Login = lazy(() => import('../Views/Login'))

export const Routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/signup',
    exact: true,
    component: SingUp,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/app/cart/',
    exact: true,
    component: Cart,
  },
  {
    path: '/product/:id',
    exact: true,
    component: SingleProduct,
  },
]
