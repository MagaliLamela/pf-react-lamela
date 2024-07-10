import "./itemlistcontainer.css"

const ItemListContainer = ( {saludo} ) => {
  return (
    <div className="saludo">
        <h2> {saludo} </h2>
    </div>
  )
}

export default ItemListContainer