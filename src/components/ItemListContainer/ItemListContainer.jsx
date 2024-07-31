import "./itemlistcontainer.css"
import { useState, useEffect } from "react"
import obtenerProductos from "../../data/data.js"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

  //declaramos como valor inicial un array vacio porque es el tipo de dato que va a tener posteriormente
  const [productos, setProductos] = useState([])

  const { idCategoria } = useParams() //Tiene que tener el mismo nombre que puse en el parametro dinamico en app.jsx

  useEffect(() => {
    obtenerProductos()
      .then((dataProductos) => {
        let productosFiltrados;

        if (idCategoria) {
          //Filtrar los productos por esa categoria recibida
          productosFiltrados = dataProductos.filter( (producto) => producto.categorias.includes(idCategoria))
          //Este .filter itera sobre mi array y recibe cada producto por separado. Se puede declarar una condición. Si cumple con la condición se va a guardar ese producto, sino se va a descartar.
        } else {
          productosFiltrados = dataProductos.filter((producto) =>
            producto.categorias.includes("promociones")
          );
        }
        
        setProductos(productosFiltrados)
        
      })
      .catch((error) => {
        console.error(error)
      })
  }, [idCategoria])

  return (
    <ItemList productos={productos} />
  )
}

export default ItemListContainer

//ItemListContainer es solamente el encargado de traer la informacion y de guardarla en la variable de estado productos.