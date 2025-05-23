import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage from '../components/Home'
import Dashboard from '../components/Admin'
import NewEmployee from '../components/Admin/NewEmployee'

const App = () => {
  return (
    
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/admin' element={<Dashboard/>}></Route>
    <Route path='/admin/new-employee' element={<NewEmployee/>}></Route>
  </Routes>

  </BrowserRouter>
    
  )
}

export default App
