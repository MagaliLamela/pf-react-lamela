import "./navbar.css"
import { PiShoppingCartFill } from "react-icons/pi";



const CartWidget = () => {
  return (
    <div className="contenedorIconoCarrito" >
      <PiShoppingCartFill size={45} className="carrito"/>
      <p className="numeroCantidad"> 0 </p>
    </div>
  )
}

export default CartWidget