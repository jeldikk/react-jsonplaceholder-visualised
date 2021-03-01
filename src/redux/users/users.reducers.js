import UsersActionTypes from "./users.types";
import faker from "faker";
const initial_data = {
  users: [],
};

const usersReducer = (state = initial_data, action) => {
  switch (action.type) {
    case UsersActionTypes.SET_USERS:
      return {
        ...state,
        users: action.payload.map((user) => ({
          ...user,
          imageUrl: `${faker.image.animals()}?random=${faker.random.number()}`,
        })),
      };
    default:
      return state;
  }
};

export default usersReducer;
