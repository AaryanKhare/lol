import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouteList from './routes.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouteList />
  </StrictMode>,
)
