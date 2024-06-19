import { combineReducers } from "redux";
import userAuthReducer from "./useAuthReducer";
import projectReducer from "./projectReducer";

const myReducer = combineReducers({
  user: userAuthReducer,
  projects: projectReducer
});

export default myReducer;
