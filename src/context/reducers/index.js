import { combineReducers } from "redux";
import userAuthReducer from "./useAuthReducer";

const myReducer = combineReducers({
  user: userAuthReducer
});

export default myReducer;
