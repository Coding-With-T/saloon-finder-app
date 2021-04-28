import { ACCESS_TOKEN, CURRENT_LOCATION, USER_DETAILS } from "../constants";

const initialState = {
  user: [],
  token: null,
  location: "",
};

const userDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DETAILS:
      return {
        ...state,
        user: action.payload,
      };

    case ACCESS_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case CURRENT_LOCATION:
      return {
        ...state,
        location: action.payload,
      };

    default:
      return state;
  }
};

export default userDetailsReducer;
