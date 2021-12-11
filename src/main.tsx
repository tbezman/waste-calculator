import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './fonts/stylesheet.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Edit } from './pages/Edit'
import { VialsProvider } from './components/VialsProvider'

ReactDOM.render(
  <React.StrictMode>
    <VialsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Edit />} path="/:profile/edit" />
        </Routes>
      </BrowserRouter>
    </VialsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
