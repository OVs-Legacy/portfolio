import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import App from './App.jsx'
import ReactLenis from "lenis/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ReactLenis root>
          <App />
      </ReactLenis>
  </StrictMode>,
)
