import { Link } from "react-router-dom"
import "./itemlistcontainer.css"

const Item = ({ producto }) => {
    return (
        <div className="card cardIndividual col-xl-3 col-lg-4 col-md-6 col-sm-12 h-100"> 
            <Link to={"/detalle/" + producto.id} className="anclaProductos" >
                <img src={producto.imagen} className="card-img-top mx-auto" alt={producto.nombre} />
                <h2 className="card-title nombreProducto"> {producto.nombre} </h2>
                <h3>
                    {producto.precioAnterior && (
                        <span>${producto.precioAnterior.toLocaleString()}</span>
                    )}
                    {producto.precioAnterior && ' | '}
                    ${producto.precio.toLocaleString()}
                </h3>
            </Link>
            <button type="button" className="btnProductos" id={producto.id}> Añadir al Carrito </button>
        </div>
    )
}

export default Item

//La tarea de Item simplemente es la vista de una card. 