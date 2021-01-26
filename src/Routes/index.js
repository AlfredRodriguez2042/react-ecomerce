import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Routes } from './Routes'

const Page404 = lazy(() => import('../Views/Page404'))
const AppRouter = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Switch>
        {Routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}

        <Route component={Page404} />
      </Switch>
    </Suspense>
  )
}

export default AppRouter
