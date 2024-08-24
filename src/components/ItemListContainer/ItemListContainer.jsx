import { useState, useEffect } from "react"

import { useParams } from "react-router-dom"

import { getDocs, collection, query, where } from "firebase/firestore"

import ItemList from "./ItemList"

import db from "../../db/db.js"

import "./itemlistcontainer.css"

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [titulo, setTitulo] = useState("")

  const { idCategoria } = useParams()

  const getProducts = async () => {
    try {
      const productosRef = collection(db, "productos");

      let q;
      if (idCategoria) {
        // Filtrar productos por categoría específica
        q = query(productosRef, where("categorias", "array-contains", idCategoria));
        setTitulo(`Productos de ${idCategoria}`);
      } else {
        // Filtrar productos promocionales
        q = query(productosRef, where("categorias", "array-contains", "promociones"));
        setTitulo("Promociones del Mes");
      }

      const dataDb = await getDocs(q);

      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() }
      });

      setProductos(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [idCategoria]);

  return (
    <div>
      <h1> {titulo} </h1>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer

//ItemListContainer es el encargado de traer la informacion y de guardarla en la variable de estado productos.