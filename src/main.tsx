import './styles/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RoutesApp from './routes/index.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<RoutesApp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
