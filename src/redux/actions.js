import axios from 'axios';
import { GET_ALL_PLANS, UPDATE_TYPE_BALANCE, UNSUBSCRIBE_USER, GET_TESTIMONIALS, LOGIN_FAILURE, LOGIN_SUCCESS, RELOAD_BY_PM, UPDATE_SALDO, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, UPDATE_RELOAD_BY_MP, GET_BALANCE_USER } from "./actions_type";


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
    const { data } = await axios.post('https://backend-6ao2.onrender.com/auth/login', {
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
    const response = await axios.post('https://backend-6ao2.onrender.com/usuarios', formData);
    console.log('Registro exitoso:', response.data);
  } catch (error) {
    console.error('Error en el registro:', error);
  }
};

export const getAllPlanes = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('https://backend-6ao2.onrender.com/plans');
      dispatch({
        type: GET_ALL_PLANS,
        payload: data
      })
    } catch (error) {
      console.error(error);
    }
  }
}
//_______________Mercado Pago___________________
export const reloadByMp = (userData) => {
  return async (dispatch) => {
    try {
      userData.price = Number(userData.price)
      const { data } = await axios.post(
        "https://backend-6ao2.onrender.com/paymentByMp/create-order",
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
export const UpdateReloadByMp = ({ payment_id, userId }) => {
  console.log(payment_id);
  return async (dispatch) => {
    try {
        const { data } = await axios.get(`https://api.mercadopago.com/v1/payments/${payment_id}`, {
            headers: {
                'Authorization': `Bearer ${'TEST-1853044715803341-081015-5ab97b7b8454f836daacf26b66a01ccc-1063666303'}`
            }
        })
        const saldo = data.transaction_amount;
        const montoIngresado = { montoIngresado: saldo};
        await axios.post(`https://backend-6ao2.onrender.com/usuarios/bolsillo/${userId}`, montoIngresado);
        window.location.href = "https://frontend-1doq.onrender.com/dashboard/mi_billetera";
      return dispatch({
        type: UPDATE_RELOAD_BY_MP,
        payload: "Ok",
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
export const getBalanceUser = (userID) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`https://backend-6ao2.onrender.com/usuarios/bolsillo/${userID}`);
      const saldo = data.saldo;
      return dispatch({
        type: GET_BALANCE_USER,
        payload: saldo,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
//_________________________________________________________/
//_______________Borrado Logico_____________________________
  export const unsubscribeUser = (data) => {
    return async (dispatch) => {
      try {
        const emailUser = {
          email: data
        }
        console.log(emailUser);
        const findId = await axios.post(`https://backend-6ao2.onrender.com/usuarios/getUserTrans`, emailUser);
        console.log(findId);
        const id = { id: findId.data.data.id };
        console.log(id);
        const deleteUser = await axios.post(`https://backend-6ao2.onrender.com/usuarios/delete`, id);
        return dispatch({
          type: UNSUBSCRIBE_USER,
          payload: deleteUser,
        });
    } catch (error) {
      console.log(error.message);
    }
  };
}
//__________________________________________________________/
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


