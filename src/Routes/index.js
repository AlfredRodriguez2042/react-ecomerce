import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { main } from './Routes'

const Page404 = lazy(() => import('../Views/Page404'))
const AppRouter = () => {
  const renderRoutes = (routes, contextPath) => {
    const children = []
    const role = useSelector((state) => state.user.user.role)
    const isAuth = useSelector((state) => state.user.isAuth)

    const renderRoute = (item, routeContextPath) => {
      let newContextPath = item.path
        ? `${routeContextPath}/${item.path}`
        : routeContextPath
      newContextPath = newContextPath.replace(/\/+/g, '/')
      if (newContextPath.includes('admin') && role !== 'admin') {
        item = {
          ...item,
          component: () => <Redirect to="/" />,
          children: [],
        }
      }
      if (newContextPath.includes('app') && !isAuth) {
        item = {
          ...item,
          component: () => <Redirect to="/" />,
          children: [],
        }
      }
      //   if (!item.component) return

      if (item.childRoutes) {
        const childRoutes = renderRoutes(item.childRoutes, newContextPath)
        children.push(
          <Route
            key={newContextPath}
            render={(props) => (
              <item.component {...props}>{childRoutes}</item.component>
            )}
            path={newContextPath}
          />
        )
        item.childRoutes.forEach((r) => renderRoute(r, newContextPath))
      } else {
        children.push(
          <Route
            key={newContextPath}
            component={item.component}
            path={newContextPath}
            exact
          />
        )
      }
    }
    routes.forEach((item) => renderRoute(item, contextPath))
    return <Switch>{children}</Switch>
  }
  const Routes = renderRoutes(main, '/')
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Switch>
        {Routes}

        <Route component={Page404} />
      </Switch>
    </Suspense>
  )
}

export default AppRouter
