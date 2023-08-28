import { UPDATE_SALDO, RELOAD_BY_PM, GET_ALL_PLANES } from "./actions_type";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const updateSaldo = (newSaldo) => {
  return {
    type: UPDATE_SALDO,
    payload: newSaldo,
  };
};

export const reloadByMp = (userData) => {
  const navigate = useNavigate
  return async (dispatch) => {
    // try {
    //   userData.price = Number(userData.price)
    //   console.log(userData);
    //   const { data } = await axios.post(
    //     "http://localhost:3001/payment/create-order",
    //     userData
    //   );
    //   console.log(data.body.items[0].unit_price);
    //   if(data.body.init_point) window.location.href = data.body.init_point;
    //   return dispatch({
    //     type: RELOAD_BY_PM,
    //     payload: data.body.items[0].unit_price,
    //   });
    // } catch (error) {
    //   console.log(error.message);
    // }
  };
};

export const getAllPlanes = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/plansRouter");
      return dispatch({
        type: GET_ALL_PLANES,
        payload: data
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

