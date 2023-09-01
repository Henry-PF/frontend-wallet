import axios from 'axios';
import { GET_ALL_PLANS, GET_TESTIMONIALS, LOGIN_FAILURE, LOGIN_SUCCESS, RELOAD_BY_PM, UPDATE_SALDO, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, } from "./actions_type";


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
  try {
    const { data } = await axios.post('http://localhost:3001/auth/login', {
      user: email,
      pass: password,
    });

    const { token } = data;

    localStorage.setItem('accessToken', token);
    localStorage.setItem('nombre', data.data.nombre);
    localStorage.setItem('apellido', data.data.apellido);
    localStorage.setItem('dni', data.data.dni);
    localStorage.setItem('telefono', data.data.telefono);
    localStorage.setItem('direccion', data.data.direccion);
    localStorage.setItem('correo_electronico', data.data.correo_electronico);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
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
    console.error('Error en el registro:', error);
  }
};

export const getAllPlanes = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('http://localhost:3001/plans');
      dispatch({
        type: GET_ALL_PLANS,
        payload: data
      })
    } catch (error) {

    }
  }
}

export const reloadByMp = (userData) => {

  return async (dispatch) => {
    try {
      userData.price = Number(userData.price)
      const { data } = await axios.post(
        "http://localhost:3001/paymentByMp/create-order",
        userData
      );
      if (data.body.init_point) window.location.href = data.body.init_point;
      return dispatch({
        type: RELOAD_BY_PM,
        payload: data.body.items[0].unit_price,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};


  export const addToFavorites = (contact) => {
    return {
      type: ADD_TO_FAVORITES,
      payload: contact,
    };
  };
  
  export const removeFromFavorites = (contactId) => {
    return {
      type: REMOVE_FROM_FAVORITES,
      payload: contactId,
    };
  };
