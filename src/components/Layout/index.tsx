import './Layout.css'
import Dock from '../Dock'
import { Outlet, useLocation } from 'react-router-dom'
import { useDockItems } from '../../constants/dockItems'
import { useEffect } from 'react'

const Layout = () => {
  const items = useDockItems()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <main id='App'>
      <Outlet />
      <div id='dock-container'>
        <Dock items={items} baseItemSize={40} magnification={70} />
      </div>
    </main>
  )
}
export default Layout
