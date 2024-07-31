import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos/:idCategoria" element={<ItemListContainer />} />
        <Route path='/detalle/:idProducto' element={<ItemDetailContainer />} />
      </Routes>

      <Footer />

    </BrowserRouter>


  )
}

export default App
