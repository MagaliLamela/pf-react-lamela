import { useEffect, useState } from "react";
import obtenerProductos from "../../data/data.js";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null); 
  const { idProducto } = useParams();

  useEffect(() => {

    obtenerProductos()
      .then((data) => {
        const productoEncontrado = data.find(
          (productoData) => productoData.id === idProducto
        );
        setProducto(productoEncontrado);
      })
      .catch((error) => {
        console.error(error);
      })
     ;
  }, [idProducto]);

  if (!producto) return <p>Producto no encontrado.</p>;

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;