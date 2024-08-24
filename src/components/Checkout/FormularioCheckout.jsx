import "./checkout.css"

const FormularioCheckout = ({ datosForm, handleChangeInput, handleSubmitForm }) => {
    return (
        <div className="contenedorFormularioCarrito container-fluid">
            <h1>Datos de Contacto</h1>
            <form onSubmit={handleSubmitForm}>

                <input type="text" placeholder="Nombre*" name="nombre" value={datosForm.nombre} onChange={handleChangeInput} />

                <input type="text" placeholder="Teléfono*" name="telefono" value={datosForm.telefono} onChange={handleChangeInput} />

                <input type="email" placeholder="E-mail*" name="email" value={datosForm.email} onChange={handleChangeInput} />

                <input type="email" placeholder="Confirmar E-mail*" name="confirmaremail" value={datosForm.confirmaremail} onChange={handleChangeInput} />

                <div className="btnFormCarrito">
                    <button className="botonFormulario" type="submit">Realizar Pedido</button>
                </div>

            </form>


        </div>
    )
}

export default FormularioCheckout