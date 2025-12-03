import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import State from './State.jsx'
import Props from './Props'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <State /> */}
    <Props />
  </StrictMode>
)
