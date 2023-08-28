import * as Yup from 'yup';

// Definimos un esquema de validación utilizando Yup
const validationsUser = Yup.object().shape({
  
  user: Yup.string()
  .required("Por favor, selecciona un usuario")
  .oneOf(["Alex", "Meli", "Mati"], "Por favor, selecciona un usuario" ),
});

export default validationsUser;
