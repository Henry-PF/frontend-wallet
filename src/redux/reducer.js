import { RELOAD_BY_PM, UPDATE_SALDO } from "./actions_type";

const initialState = {
    user: {
        name: "PEPITO",
        id: "idUser",
        saldo: 10000000,
        last_recharge: 0,
           favorites: [
      { name: "Nombre1", id: "id1" },
      { name: "Nombre2", id: "id2" },
      { name: "Nombre3", id: "id3" },
    ],
      },
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
        default:
          return state;
      }
}

export default rootReducer;


