import './styles/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RoutesApp from './routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path='/*' element={<RoutesApp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
