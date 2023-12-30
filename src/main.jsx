import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MenuToggleProvider from './context/MenuToggleProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MenuToggleProvider>

        <App />
      </MenuToggleProvider>
    </BrowserRouter>
  </React.StrictMode>
)
