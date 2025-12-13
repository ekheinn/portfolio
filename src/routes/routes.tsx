import Home from '../pages/Home'
import Projects from '../pages/Projects'
import type { RouteObject } from '../types/interfaces'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
]
