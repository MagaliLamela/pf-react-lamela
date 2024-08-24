import { useContext } from "react"

import { Link } from "react-router-dom"

import { CartContext } from "../../context/CartContext"

import { PiShoppingCartFill } from "react-icons/pi";

import "./navbar.css"



const CartWidget = () => {

  const { cantidadTotal } = useContext(CartContext)

  let cantidad = cantidadTotal()

  return (
    <Link to={"/cart"} className="contenedorIconoCarrito">
      <PiShoppingCartFill size={45} className="carrito" />
      {cantidad > 0 && (
        <p className="numeroCantidad"> {cantidad} </p>
      )}
    </Link>
  )
}

export default CartWidget