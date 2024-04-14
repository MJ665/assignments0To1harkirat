import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import {Dashboard} from './components/Dashboard'
import {Landing} from './components/Landing'

function App() {


  return (
    
 <BrowserRouter>
 <div style={{background :"black"}}>hi this is the top bar</div>
<Routes>
  <Route path = "/dashboard" element = {<Dashboard/>}/>
  <Route path = "/" element = {<Landing />}/>
</Routes>
 </BrowserRouter> 
  
  )
}

export default App
