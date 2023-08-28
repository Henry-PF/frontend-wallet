import * as Yup from 'yup';

// Definimos un esquema de validación utilizando Yup
const validationsCbuAlias = Yup.object().shape({
    cbuAlias: Yup.string()
    .min(4, "El CBU/Alias es muy pequeño")
    .max(14,"El CBU/Alias es muy grande")
    .required("El CBU/Alias es requerido"),
});

export default validationsCbuAlias;