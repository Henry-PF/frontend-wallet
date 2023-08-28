import { UPDATE_SALDO } from "./actions_type";

export const updateSaldo = (newSaldo) => {
    return {
      type: UPDATE_SALDO,
      payload: newSaldo,
    };
  };
  