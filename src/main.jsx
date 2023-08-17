import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import './index.css'
import { GlobalProvider } from './context/global_context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
)
