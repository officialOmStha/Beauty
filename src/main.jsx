import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react"
import './index.css'
import Nav from "./Components/Nav/NavBar"
import Home from "./Components/Home/Home"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Home />
  </StrictMode>,
)
