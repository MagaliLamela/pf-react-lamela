import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';

import { CartProvider } from './context/CartContext'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from "./components/Footer/Footer"
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>

        <NavBar />
        <ToastContainer />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:idCategoria" element={<ItemListContainer />} />
          <Route path='/detalle/:idProducto' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />

        </Routes>

        <Footer />
      </CartProvider>

    </BrowserRouter>


  )
}

export default App
