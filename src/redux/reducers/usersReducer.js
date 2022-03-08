import { GETTING_USERS, GETTING_USERS_SUCCESS, GETTING_USERS_FAILED } from '../types';

const initialState = {users: [], loading: true, errors: null};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETTING_USERS:
      return {
          ...state
      };
    case GETTING_USERS_SUCCESS:
      return {
          ...state,
          loading: false,
          users: payload
      };
    case GETTING_USERS_FAILED:
      return {
          ...state,
          loading: false,
          errors: payload
      };
    default:
      return state;
  }
};

export default usersReducer;