import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Addproducts from './pages/Addproducts'
import Viewproducts from './pages/Viewproducts'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Addproducts />}></Route>
        {/* <Route path='/viewproduct' element={<Viewproducts />}></Route> */}

      </Routes>
    </>
  )
}

export default App
