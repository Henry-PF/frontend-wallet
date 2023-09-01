import axios from 'axios';
import { GET_TESTIMONIALS, LOGIN_FAILURE, LOGIN_SUCCESS, UPDATE_SALDO } from "./actions_type";

export const updateSaldo = (newSaldo) => {
  return {
    type: UPDATE_SALDO,
    payload: newSaldo,
  };
};

export const getTestimonials = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/testimony');
      dispatch({
        type: GET_TESTIMONIALS,
        payload: data
      })
    } catch (error) {

    }
  }
}

export const userLogin = (email, password) => async (dispatch) => {
  console.log("email", email, "pass", password);
  try {
    const response = await axios.post('http://localhost:3001/auth/login', {
      user: email,
      pass: password,
    });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.message,
    });
  }
};

export const userRegistration = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/usuarios', formData);
    console.log('Registro exitoso:', response.data);
  } catch (error) {
    // Manejo de errores
    console.error('Error en el registro:', error);
  }
};
