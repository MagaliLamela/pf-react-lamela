import { useContext, useState } from "react"

import { Link } from "react-router-dom"

import { CartContext } from "../../context/CartContext"

import ItemCount from "../ItemCount/ItemCount"

import { FaRegCheckCircle } from "react-icons/fa";

import "./itemdetailcontainer.css"

const ItemDetail = ({ producto }) => {

    const { agregarProducto } = useContext(CartContext)

    const [mostrarItemCount, setMostrarItemCount] = useState(true)

    const agregarAlCarrito = (contador) => {
        const productoCarrito = { ...producto, cantidad: contador }

        agregarProducto(productoCarrito)

        //ocultamos el componente ItemCount
        setMostrarItemCount(false)
    }

    return (
        <div className="container-fluid">
            <div className="contenedorImagenTitulo">
                <img src={producto.imagen} alt={producto.nombre} />
                <div>
                    <h1>{producto.nombre}</h1>
                    <h2>
                        {producto.precioAnterior && (
                            <span>${producto.precioAnterior.toLocaleString()}</span>
                        )}
                        {producto.precioAnterior && ' | '}
                        $ {producto.precio.toLocaleString()}
                    </h2>
                    {
                        mostrarItemCount ? (
                            <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />) : (
                            <button className="btnIrAlCarrito"><Link to="/cart">Ir al carrito</Link></button>
                        )
                    }
                    <p> <span> Envío gratuito a tu domicilio en CABA y GBA de Lunes a Viernes de 14 a 22 hs. </span> <br />
                        <FaRegCheckCircle /> Comprá antes de las 12 hs y recibilo en el día antes de las 22 hs. <br />
                        <FaRegCheckCircle /> Comprando después de las 12 hs, recibilo de 14 a 22 hs el día hábil siguiente. <br />
                        <FaRegCheckCircle /> Retira en tienda 1 hora después de realizada tu compra, todos los días de 10 a 20 hs. <br />
                        <FaRegCheckCircle /> Devolución sin cargo dentro de los 30 días.
                    </p>
                </div>
            </div>

            <div className="contenedorInfo">
                <p>{producto.info} </p>
            </div>
        </div>
    )
}

export default ItemDetail