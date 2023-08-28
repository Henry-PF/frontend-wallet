import * as Yup from "yup";

// Validaciones realizadas para el formulario con yup, tanto de campos obligatorios como min y max de caracteres:
const mySchema = Yup.object().shape({
    amount: Yup.string()
    .matches(/^\d+$/, "Ingrese un número válido")
    .min(2, "El monto debe ser de 2 dígitos mínimo")
    .max(9, "Límite alcanzado")
    .required("Por favor, ingrese un monto"),

    message: Yup.string()
    .max(30, "El máximo de caracteres es de 20"),
  })

export default mySchema;