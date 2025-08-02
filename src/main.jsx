import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Cicd from './pages/CICDLogin.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/GITDEPLOY">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cicd" element={<Cicd />} />
    </Routes>
  </BrowserRouter>
)
