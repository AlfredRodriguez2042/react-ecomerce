import { lazy } from 'react'

const Home = lazy(() => import('../Views/Home'))
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
]
