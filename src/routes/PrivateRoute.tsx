import { FC, ReactNode } from 'react'

// Libraries
import { Route, Navigate } from 'react-router-dom'

interface Props {
  exact?: boolean
  component: ReactNode
  path: string
}

const PrivateRoute: FC<Props> = ({ component: Component, path }) => {
  const token = localStorage.getItem('access_token')

  const renderComponent = () => {
    if (token) {
      return <Route path={path} element={Component} />
    }
    return <Navigate to="/" />
  }

  return renderComponent()
}

export default PrivateRoute
