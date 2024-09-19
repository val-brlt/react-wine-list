import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WineApp from './WineApp.jsx'
import 'bootstrap/dist/css/bootstrap.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WineApp />
  </StrictMode>,
)
