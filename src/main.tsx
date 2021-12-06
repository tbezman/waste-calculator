import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './fonts/stylesheet.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Edit } from './Edit'
import { VialsProvider } from './VialsProvider'

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
