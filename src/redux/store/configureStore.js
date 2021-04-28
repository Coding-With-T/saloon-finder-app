import { combineReducers, createStore } from "redux";
import userAccessTokenReducer from "../reducers/userAccessTokenReducer";
import userDetailsReducer from "../reducers/userDetailsReducer";

const rootReducer = combineReducers({
  current_user: userDetailsReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
