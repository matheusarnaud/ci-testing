import { FC } from 'react'

// Models
import { Route as RouteType } from 'models'

// Libraries
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'

// Misc
import PrivateRoute from './PrivateRoute'
import paths from './paths'

const RouterContainer: FC = () => {
  return (
    <Router>
      <Routes>
        {paths.map((route: RouteType) => {
          if (route.private) {
            return (
              <PrivateRoute
                exact
                component={<route.component />}
                path={route.path}
                key={route.path}
              />
            )
          }
          return (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.path}
            />
          )
        })}
      </Routes>
    </Router>
  )
}

export default RouterContainer
