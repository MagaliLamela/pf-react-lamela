import * as yup from 'yup';

// Define el esquema de validación
const userSchema = yup.object({
    nombre: yup.string().required("El campo nombre es requerido"),
    telefono: yup.string().required("El campo telefono es requerido"),
    email: yup.string()
        .email("El campo email no tiene el formato correcto")
        .required("El campo email es requerido"),
    confirmaremail: yup.string()
        .email("El campo confirmar email no tiene el formato correcto")
        .required("El campo confirmar email es requerido")
        .oneOf([yup.ref('email')], "Los emails no coinciden")
});

const validateForm = async (dataForm) => {
    const errors = [];

    // Validación de cada campo secuencialmente
    try {
        await userSchema.validateAt('nombre', dataForm);
    } catch (error) {
        errors.push({ field: 'nombre', message: error.message });
    }

    if (errors.length === 0) {
        try {
            await userSchema.validateAt('telefono', dataForm);
        } catch (error) {
            errors.push({ field: 'telefono', message: error.message });
        }
    }

    if (errors.length === 0) {
        try {
            await userSchema.validateAt('email', dataForm);
        } catch (error) {
            errors.push({ field: 'email', message: error.message });
        }
    }

    if (errors.length === 0) {
        try {
            await userSchema.validateAt('confirmaremail', dataForm);
        } catch (error) {
            errors.push({ field: 'confirmaremail', message: error.message });
        }
    }

    // Verificar la coincidencia de los emails
    if (errors.length === 0) {
        try {
            await userSchema.validate(dataForm, { abortEarly: false });
        } catch (error) {
            const confirmEmailError = error.inner.find(err => err.path === 'confirmaremail');
            if (confirmEmailError) {
                errors.push({ field: 'confirmaremail', message: confirmEmailError.message });
            }
        }
    }

    if (errors.length > 0) {
        return { status: 'error', message: errors[0].message };
    }

    return { status: 'success', message: '' };
};

export default validateForm;

