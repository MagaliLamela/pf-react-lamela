import "./itemlistcontainer.css"
import { useState, useEffect } from "react"
import obtenerProductos from "../../data/data.js"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [titulo, setTitulo] = useState("Promociones del Mes")

  const { idCategoria } = useParams() //Tiene que tener el mismo nombre que puse en el parametro dinamico en app.jsx

  useEffect(() => {
    obtenerProductos()
      .then((dataProductos) => {
        let productosFiltrados;

        if (idCategoria) {
          //Filtrar los productos por esa categoria recibida
          productosFiltrados = dataProductos.filter((producto) => producto.categorias.includes(idCategoria));
          setTitulo(`Productos de ${idCategoria}`);
        } else {
          productosFiltrados = dataProductos.filter((producto) =>
            producto.categorias.includes("promociones")
          );
          setTitulo("Promociones del Mes");
        }

        setProductos(productosFiltrados)

      })
      .catch((error) => {
        console.error(error)
      })
  }, [idCategoria])

  return (
    <div>
    <h1> {titulo} </h1>
    <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer

//ItemListContainer es el encargado de traer la informacion y de guardarla en la variable de estado productos.