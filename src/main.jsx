import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react"
import './index.css'
import Nav from "./Components/Nav/NavBar"
import Home from "./Components/Home/Home"
import About from "./Components/AboutUs/About"
import Work from "./Components/Works/Work"
import Service from "./Components/Services/Service"
import Contact from "./Components/Contacts/Contact"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Home />
    <About />
    <Work />
    <Service />
    <Contact />
  </StrictMode>,
)
