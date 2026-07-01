import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ListaPerfiles from './components/ListaPerfiles'
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListaPerfiles />
  </StrictMode>,
)
