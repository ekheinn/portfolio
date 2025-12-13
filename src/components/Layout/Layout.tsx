import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main id='App'>
      <Outlet />
    </main>
  )
}
export default Layout
