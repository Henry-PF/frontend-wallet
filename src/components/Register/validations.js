import * as Yup from "yup";

// Validaciones realizadas para el formulario con yup, tanto de campos obligatorios como min y max de caracteres:
const mySchema = Yup.object().shape({
    name: Yup.string()
    .min(6, "El nombre debe tener 5 caracteres como minimo")
    .max(12, "El máximo de caracteres es de 12")
    .required("Por favor, ingrese un nombre"),

    surname: Yup.string()
    .min(6, "El apellido debe tener 5 caracteres como minimo")
    .max(12, "El máximo de caracteres es de 12")
    .required("Por favor, ingrese un apellido"),

    email: Yup.string()
    .email("El email no es valido")
    .required("Por favor, ingrese un email"),

    dni: Yup.string()
    .matches(/^\d+$/, "Ingrese un DNI válido")
    .min(5, "El número es muy pequeño")
    .max(14, "El número es muy extenso")
    .required("Por favor, ingrese su número DNI"),

    address: Yup.string()
    .required("Por favor, ingrese una dirección"),

    phone: Yup.string()
    .matches(/^\d+$/, "Ingrese un número válido")
    .min(5, "El número es muy pequeño")
    .max(14, "El número es muy extenso")
    .required("Por favor, ingrese un número"),

    picfile: Yup.mixed()
    .required('Debes adjuntar tu foto'),

    idfile1: Yup.mixed()
    .required('Debes adjuntar el frente de tu identificación'),

    idfile2: Yup.mixed()
    .required('Debes adjuntar el dorso de tu identificación')
  })

export default mySchema;