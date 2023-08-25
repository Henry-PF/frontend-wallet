import { UPDATE_SALDO } from "./actions_type";

const initialState = {
    user: {
        name: "PEPITO",
        id: "idUser",
        saldo: 10000000,
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
            },
          };
        default:
          return state;
      }
}

export default rootReducer;


