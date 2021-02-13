import { lazy } from 'react'
import { SingleProduct } from '../Components/Product'
import PublicLayout from '../Layout/Public'
import AdminLayout from '../Layout/Admin'
import Page404 from '../Views/Page404'

const Home = lazy(() => import('../Views/Home'))
const Cart = lazy(() => import('../Views/Cart'))
const SingUp = lazy(() => import('../Views/SignUp'))
const Login = lazy(() => import('../Views/Login'))
const Dashboard = lazy(() => import('../Views/Dashboard'))

const Public = {
  path: '/',
  name: 'home',
  component: PublicLayout,
  childRoutes: [
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
    {
      path: '*',
      component: Page404,
    },
  ],
}

const PrivateRoute = {
  path: '/app',
  name: 'home',
  component: PublicLayout,
  childRoutes: [
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
  ],
}
const Admin = {
  path: '/admin',
  name: 'home',
  component: AdminLayout,
  childRoutes: [
    {
      path: '',

      component: Dashboard,
    },
  ],
}

export const main = [Admin, Public, PrivateRoute]
