import Item from "./Item"

const ItemList = ({ productos }) => {
    return (
        <div className="container-fluid row cardsProductos m-3">
            {productos.map((producto) => (
                <Item key={producto.id} producto={producto} />
            ))}
        </div>
    )
}

export default ItemList

//La tarea de ItemList es recibir esos productos y mapearlos, e iterar sobre cada uno de los elementos que tengamos dentro de nuestro array de productos.