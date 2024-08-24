import { useContext } from 'react'

import { Link } from 'react-router-dom'

import { CartContext } from '../../context/CartContext'

import "./cart.css"

const Cart = () => {

    const { carrito, precioTotal, borrarProducto, vaciarCarrito } = useContext(CartContext)

    if (carrito.length === 0) {
        return (
            <div className="carritoVacio">
                <h2>El carrito está vacío.</h2>
                <Link to={"/"}> <button>Volver a la tienda</button></Link>
            </div>
        )
    }
    return (
        <div className="container-fluid contenedorCarrito">

            <h1>Mi Carrito</h1>

            <table className="contenedorCarritoProductos">
                <thead>
                    <tr className='titulosCarrito'>
                        <th>
                            <h2>Producto</h2>
                        </th>
                        <th>
                            <h2>Precio</h2>
                        </th>
                        <th>
                            <h2>Cantidad</h2>
                        </th>
                        <th>
                            <h2>Subtotal</h2>
                        </th>
                        <th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map((productoCarrito) => (

                        <tr>
                            <td className="celdaProducto">
                                <img className="imgCarrito" src={productoCarrito.imagen} alt="${producto.nombre}" />
                                <h3>{productoCarrito.nombre}</h3>
                            </td>
                            <td className="celdaPrecio">
                                <h3>${productoCarrito.precio.toLocaleString()}</h3>
                            </td>
                            <td className="celdaCantidad">
                                <h3>{productoCarrito.cantidad}</h3>
                            </td>
                            <td className="celdaSubtotal">
                                <h3>${(productoCarrito.cantidad * productoCarrito.precio).toLocaleString()}</h3>
                            </td>
                            <td>
                                <button className="btnCarritoX" title="Botón para Eliminar Producto" onClick={() => borrarProducto(productoCarrito.id)}> X </button>
                            </td>
                        </tr>

                    ))}
                </tbody>
                <tfoot>
                    <tr className='celdaTotal'>
                        <td>
                            <h3>Total</h3>
                        </td>
                        <td></td>
                        <td></td>
                        <td>
                            <h3>${precioTotal().toLocaleString()}</h3>
                        </td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>

            <div className='contenedorBtnVaciarYFinalizar'>
                <button className='btnVaciarCarrito' onClick={vaciarCarrito}>Vaciar Carrito</button>

                <button className="btnCarritoFinalizar"><Link to={"/checkout"}> Finalizar Compra</Link></button>

            </div>
        </div>
    )
}

export default Cart