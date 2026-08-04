import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Clima from './components/Clima'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Clima />
  </StrictMode>,
)
