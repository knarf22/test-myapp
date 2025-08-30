import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routing/AppRoute'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='test-myapp'>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
