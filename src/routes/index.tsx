import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import { ErroPage } from '../pages/Error'
import Layout from '../components/Layout'

function RoutesApp() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}

        <Route path='*' element={<ErroPage />} />
      </Route>
    </Routes>
  )
}

export default RoutesApp
