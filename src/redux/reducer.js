import { UPDATE_SALDO , ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from "./actions_type";

const initialState = {
  user: {
    name: "PEPITO",
    id: "idUser",
    saldo: 10000000,
    favorites: [
     
    ],
    contacts: [
      {
        name: "John Doe",
        email: "john@example.com",
        id: "A123",
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        id: "B456",
      },
      {
        name: "Alice Johnson",
        email: "alice@example.com",
        id: "C789",
      },
      {
        name: "Bob Williams",
        email: "bob@example.com",
        id: "D012",
      },
      {
        name: "Emily Brown",
        email: "emily@example.com",
        id: "E345",
      },
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
      case ADD_TO_FAVORITES:
        return {
          ...state,
          user: {
            ...state.user,
            favorites: [...state.user.favorites, action.payload],
          },
        };
      case REMOVE_FROM_FAVORITES:
        return {
          ...state,
          user: {
            ...state.user,
            favorites: state.user.favorites.filter(contact => contact.id !== action.payload),
          },
        };
    default:
      return state;
  }
};

export default rootReducer;
