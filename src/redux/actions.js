import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, UPDATE_SALDO } from "./actions_type";

export const updateSaldo = (newSaldo) => {
    return {
      type: UPDATE_SALDO,
      payload: newSaldo,
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