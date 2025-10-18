import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import About from './pages/About.jsx';
import Contact from './pages/contact.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import {useEffect, useState} from "react";
import { useDispatch } from 'react-redux';
import { getProducts } from './redux/productSlice.js';
import Cart from './pages/Cart.jsx';

function App() {
//   const[cartItems, setCart] = useState(0);
// //   const products = [
// //     {
// //       id: 1,
// //       name: 'Iphone 16',
// //       price: '₹89999',
// //       discription: 'The latest iPhone with advanced features and sleek design.',
// //       photo: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70'
// //     },
// //     {
// //       id: 2,
// //       name: 'iphone 16 pro',
// //       price: '₹100000',
// //       discription: 'The latest iPhone with advanced features and sleek design.',
// //       photo:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/x/e/-original-imah4jyw4fpqe7ru.jpeg?q=70'
// //     },
// //     {
// //       id: 3,
// //       name: 'iqoo Z10 Lite',
// //       price: '₹30000',
// //       discription: 'A powerful smartphone with impressive performance.',
// //       photo: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/n/f/z10-lite-5g-d2025a-iqoo-original-imahdgdjaxfgxnm3.jpeg?q=70'
// //     },
// //     {
// //       id: 4,
// //       name: 'vivo T4  Lite',
// //       price: '₹25000',
// //       discription: 'A budget-friendly smartphone with decent features.',
// //       photo: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/6/9/t/-original-imahfkvfhpfaftmb.jpeg?q=70'
// //     },
// //     {
// //       id: 5,
// //       name: 'oneplus 11R',
// //       price: '₹33000',
// //       discription: 'A powerful smartphone with impressive performance.',
// //       photo: 'https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/x/w/5/nord-ce4-lite-5g-cph2619-oneplus-original-imahf9mvhhg35f5y.jpeg?q=70'
// //     },
// //     {
// //       id: 6,
// //       name: 'oppo K13x',
// //       price: '₹20000',
// //       discription: 'A mid-range smartphone with good features.',
// //       photo: ' https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/h/q/k/-original-imahfw4vamrf5xhf.jpeg?q=60'
// //     },
// //     {
// //       id: 7,
// //       name: 'nothing 3A',
// //       price: '₹23400',
// //       discription: 'A unique smartphone with a transparent design.',
// //       photo: 'https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/e/l/m/-original-imahcfcfhxrf5hzg.jpeg?q=60'
// //     },
// //     {
// //       id: 8,
// //       name: 'samsung A14',
// //       price: '₹30000',
// //       discription: 'A budget-friendly smartphone with decent features.',
// //       photo: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/y/c/-original-imah4sssdf9pgz3e.jpeg?q=70'
// //     },
// //     {
// //       id: 9,
// //       name: 'samsung s25',
// //       price: '₹80000',
// //       discription: 'The latest flagship smartphone from Samsung.',
// //       photo: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/a/i/-original-imahfvuagzmf2ppf.jpeg?q=70'
// //     },
// //     {
// //       id: 10,
// //       name: 's25 ultra',
// //       price: '₹100000',
// //       discription: 'A premium smartphone with top-of-the-line features.',
// // photo:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/f/l/-original-imahfvua89xenfgq.jpeg?q=70'    },
// //   ]
//   const[products, setProdcuts] = useState([])
  const dispatch = useDispatch();


const FetchProdcuts = () => {
  fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data)=>dispatch(getProducts(data)))
  .catch((err)=> console.log(err))
}

useEffect(()=>{
  FetchProdcuts();
},[])

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/productdetails/:id' element={<ProductDetails />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    <Footer/>
    </BrowserRouter>

    // <>
    //   <Header />
    //   <Carousels />
    //   <Home products={products} />
    // </>
  )
}

export default App
