import { combineReducers } from "redux";
import foodItems from "./foodOrderReducers";
export default combineReducers({
  foodItems: foodItems
});
