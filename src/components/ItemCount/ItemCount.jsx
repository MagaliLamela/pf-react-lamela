import { useState } from "react"

import { useLocation } from "react-router-dom";

import "./itemcount.css"

const ItemCount = ({ stock, agregarAlCarrito }) => {
    const [count, setCount] = useState(1);

    const location = useLocation();

    const aumentar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const disminuir = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const isDetailPage = location.pathname.includes('detalle');
    const itemCountClass = isDetailPage ? 'itemCountDentroDeDetalle' : 'itemCountDentroDeCard';

    return (
        <div className={`contenedorItemCount ${itemCountClass}`} >
            <div className="itemCount">
                <button className="btnRestarProducto" onClick={disminuir}>-</button>
                <p> {count} </p>
                <button className="btnSumarProducto" onClick={aumentar}>+</button>
            </div>

            <button className="btnAgregarProducto" onClick={() => agregarAlCarrito(count)}>Añadir al carrito</button>
        </div>
    )
}

export default ItemCount