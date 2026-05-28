import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Normalize } from 'styled-normalize'
import App from './App.jsx'
import { MyProvider } from './context/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Normalize />
    <MyProvider>
      <App />
    </MyProvider>
  </StrictMode>,
)
