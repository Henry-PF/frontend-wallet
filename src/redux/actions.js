import axios from 'axios';
import { GET_ALL_PLANS, GET_TESTIMONIALS, LOGIN_FAILURE, LOGIN_SUCCESS, RELOAD_BY_PM, UPDATE_SALDO } from "./actions_type";

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
    const response = await axios.post('http://localhost:3001/auth/login', {
      user: email,
      pass: password,
    });

    const { token } = response.data;

    localStorage.setItem('accessToken', token);

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

