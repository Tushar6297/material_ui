import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Dashboard from './components/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'
import Products from './components/Products'
import Appbar from './components/Appbar'
import Add_product from './components/Add_product'

import Add_to_card from './components/Add_to_card'
import Order_table from './components/Order_table'
import User from './components/User'
import Bill from './components/Bill'
import Usestate from './context/Usestate'
import SetModal from './components/SetModal'



function App() {

  return (
    <>


      <Usestate>
        <Routes>
          <Route path='/' element={<Landing />} />
          {/* <Route path='/men' element={<Men_product/>}></Route> */}
          {/* <Route path='/women' element={<Women_products/>}></Route> */}
          {/* <Route path='/about' element={<About_product/>}></Route> */}
          <Route path='/add_to_card' element={<Add_to_card />}></Route>
          <Route path='/add_to_card/:id' element={<Add_to_card />}></Route>
          <Route path='/order_table' element={<Order_table />}></Route>
          <Route path='/user_login' element={<User />}></Route>
          <Route path='/billing_format' element={<Bill />}></Route>
          <Route path='/setmodal' element={<SetModal />}></Route>


          <Route path='/admin' element={<Appbar />}>
            <Route path='/admin' element={<Dashboard />} />
            <Route path='/admin/products' element={<Products />} />
            <Route path='/admin/add_products' element={<Add_product />} />
            <Route path='/admin/add_products/:id' element={<Add_product />} />


          </Route>

        </Routes>

      </Usestate>

    </>
  )
}



export default App
