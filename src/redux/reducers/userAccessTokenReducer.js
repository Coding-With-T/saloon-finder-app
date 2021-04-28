import { ACCESS_TOKEN } from "../constants";

const initialState = {
  token: '',
};

const userAccessTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCESS_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};

export default userAccessTokenReducer;
