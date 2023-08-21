import * as Yup from "yup";

// Validaciones realizadas para el formulario con yup, tanto de campos obligatorios como min y max de caracteres:
const mySchema = Yup.object().shape({
    name: Yup.string()
    .min(6, "El nombre debe tener 6 caracteres como minimo")
    .max(12, "El máximo de caracteres es de 12")
    .required("Por favor, ingrese un nombre"),

    email: Yup.string()
    .email("El email no es valido")
    .required("Por favor, ingrese un email"),

    password: Yup.string()
    .min(6, "La contraseña debe tener 6 caracteres como minimo")
    .max(12, "El máximo de caracteres es de 12")
    .required("Por favor, ingresa una contraseña"),

    picfile: Yup.mixed()
    .required('Debes adjuntar tu foto'),

    idfile1: Yup.mixed()
    .required('Debes adjuntar el frente de tu identificación'),

    idfile2: Yup.mixed()
    .required('Debes adjuntar el dorso de tu identificación')
  })

export default mySchema;