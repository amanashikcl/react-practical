import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Carousels from './components/Carosel.jsx';
import Home from './pages/Home.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Productdetails from './components/Productdetails.jsx';
import Product from './components/Product.jsx';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { geetproducts } from './redux/productSlice.js';
import { useSelector } from 'react-redux';
import Cart from './pages/Cart.jsx';
import { ToastContainer } from 'react-toastify';
import ListProducts from './admin/pages/listProducts.jsx';
import AddProducts from './admin/pages/addProducts.jsx'
import EditProduct from './admin/pages/editProduct.jsx'
import ProtectedRoute from './utils/ProtectedRoute.jsx';


function App() {
  const dispatch =useDispatch()


  const getproducts = () => {
   const products= JSON.parse(localStorage.getItem("products")) || [];
   dispatch(geetproducts(products))
  }
    

  
useEffect(()=>{
getproducts()
},[])

  return (

    <BrowserRouter>
      <Header  />
      <ToastContainer  position='top-center' autoClose={3000} />
      <Routes>
        <Route path='/' element={<Home  />} />
        <Route path='/product' element={<Product/>} />
        <Route path='/about' element={< About />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/product/:id' element={<Productdetails/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin-listproducts' element={<ProtectedRoute>
          <ListProducts/>
        </ProtectedRoute>} />
        <Route path='/admin-addproducts' element={<AddProducts />} />
        <Route path='/admin-editproduct/:id' element={<ProtectedRoute>
          <EditProduct />
        </ProtectedRoute>} />

      </Routes>
      <Footer />
    </BrowserRouter>
   
  )
}

export default App
