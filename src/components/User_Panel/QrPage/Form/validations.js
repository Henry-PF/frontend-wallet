import * as Yup from "yup";
 
const mySchema = Yup.object().shape({
    businessName: Yup.string()
    .max(12, "El maximo de caracteres es de 15")
    .required("Un nombre es requerido")})

export default mySchema;