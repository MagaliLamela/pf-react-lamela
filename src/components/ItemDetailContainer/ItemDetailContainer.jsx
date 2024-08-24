import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";

import ItemDetail from "./ItemDetail";

import db from "../../db/db.js";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const { idProducto } = useParams();

  const getProduct = async () => {
    try {
      const docRef = doc(db, "productos", idProducto);
      const dataDb = await getDoc(docRef);

      if (dataDb.exists()) {
        const data = { id: dataDb.id, ...dataDb.data() };
        setProducto(data);
        setError(null); // Si el producto existe, no hay error
      } else {
        setProducto(null); // Producto no encontrado
        setError("Producto no encontrado.");
      }
    } catch (error) {
      console.log(error);
      setProducto(null); // En caso de error, tratarlo como no encontrado
      setError("Error al cargar el producto.");
    } finally {
      setCargando(false); // Termina el estado de carga
    }
  };

  useEffect(() => {
    getProduct();
  }, [idProducto]);

  if (cargando) {
    return <div>Cargando...</div>; // Mostrar mensaje de carga o spinner
  }

  if (error) {
    return (
      <div className="productoNoEncontrado">
        <h2>{error}</h2>
        <Link to={"/"}>
          <button>Volver a la tienda</button>
        </Link>
      </div>
    );
  }

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
