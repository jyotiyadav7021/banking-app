import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage from '../components/Home'
import Dashboard from '../components/Admin'

const App = () => {
  return (
    
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/admin' element={<Dashboard/>}></Route>
  </Routes>

  </BrowserRouter>
    
  )
}

export default App
