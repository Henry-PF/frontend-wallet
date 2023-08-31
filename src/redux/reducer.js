import { RELOAD_BY_PM, UPDATE_SALDO, GET_ALL_PLANES } from "./actions_type";
import { financialProducts } from "../components/Landing_Page/Services/data";

const initialState = {
    user: {
        name: "PEPITO",
        id: "idUser",
        saldo: 10000000,
        last_recharge: 0,
        plan_Adhered: "gratis",
           favorites: [
      { name: "Nombre1", id: "id1" },
      { name: "Nombre2", id: "id2" },
      { name: "Nombre3", id: "id3" },
    ],
      },
    planes: financialProducts, 
    //Aca arriba se tiene que reemplazar por un array vacio para cuando la action GET_ALL_PLANES tenga la ruta correcta
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SALDO:
          return {
            ...state,
            user: {
              ...state.user,
              saldo: action.payload,
            }
          };
          case RELOAD_BY_PM: 
          return{...state,
            user: {
              ...state.user,
              last_recharge: action.payload
            }}
            case GET_ALL_PLANES:
              return{...state, planes: action.payload}
        default:
          return state;
      }
}

export default rootReducer;


