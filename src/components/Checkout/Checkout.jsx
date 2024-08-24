import { useState, useContext } from "react";

import { Timestamp, addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

import { CartContext } from "../../context/CartContext";

import FormularioCheckout from "./FormularioCheckout";

import db from "../../db/db.js";
import validateForm from "../../utils/validacionFormulario.js";

const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
        confirmaremail: ""
    });

    const [idOrden, setIdOrden] = useState(null);
    const [error, setError] = useState(null);

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleChangeInput = (event) => {
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
    };

    const handleSubmitForm = async (event) => {
        event.preventDefault();

        // Formatear la orden
        const orden = {
            comprador: { ...datosForm },
            productos: [...carrito],
            total: precioTotal(),
            fecha: Timestamp.fromDate(new Date())
        };

        // Validar el formulario
        const response = await validateForm(datosForm);

        if (response.status === "success") {
            sendOrder(orden);
            vaciarCarrito();
        } else {
            if (error !== response.message) {
                setError(response.message);
                toast.warning(response.message, {
                    onClose: () => {
                        // Permite que el usuario vea el error actual antes de mostrar otro
                        setError(null);
                    }
                });
            }
        }
    };

    const sendOrder = async (orden) => {
        try {
            const ordenedRef = collection(db, "ordenes");
            const ordenDb = await addDoc(ordenedRef, orden);
            setIdOrden(ordenDb.id);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            {idOrden ? (
                <div className="contenedorOrdenCompleta">
                    <h2>¡Orden completada correctamente!</h2>
                    <p>Guarde el id de su orden generada: {idOrden}</p>
                </div>
            ) : (
                <FormularioCheckout datosForm={datosForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} />
            )}
        </div>
    );
};

export default Checkout;


