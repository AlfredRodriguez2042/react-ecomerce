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
const Customers = lazy(() => import('../Views/Customers'))
const Profile = lazy(() => import('../Views/Profile'))

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
      path: '/app/profile',
      exact: true,
      component: Profile,
    },
    {
      path: '*',
      component: Page404,
    },
  ],
}

const Admin = {
  path: '/admin',
  name: 'home',
  component: AdminLayout,
  childRoutes: [
    {
      path: 'dashboard',

      component: Dashboard,
    },
    {
      path: '/products',
      exact: true,
      component: Home,
    },
    {
      path: '/customers',
      exact: true,
      component: Customers,
    },
    {
      path: '/profile',
      exact: true,
      component: Profile,
    },
  ],
}

export const main = [Admin, Public]
