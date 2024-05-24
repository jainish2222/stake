import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import {BrowserRouter} from 'react-router-dom'
import { BalProvider } from './hooks/BalContext.jsx'
import { ResProvider } from './hooks/ResContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ResProvider>
    <BalProvider>
            <App />
    </BalProvider>
    </ResProvider>
    
)
