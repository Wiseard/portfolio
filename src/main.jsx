import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import { HelmetProvider } from 'react-helmet-async'
import { GlobalProvider } from './context/global_context'
import './index.css'

const helmetContext = {}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </HelmetProvider>
  </React.StrictMode>
)
