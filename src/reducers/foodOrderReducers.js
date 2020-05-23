import { FOODITEMS, ZeroItem, ITEM } from "../actions/types";

const intialState = {
  fooditem: [],
  selectedItem: [],
  addbutton: true
};

export default function(state = intialState, action) {
  switch (action.type) {
    case FOODITEMS:
      return {
        ...state,
        fooditem: action.payload
      };
    case ZeroItem:
      console.log(action.payload);
      return {
        ...state,
        addbutton: action.payload
      };
    case ITEM:
      return { ...state, selectedItem: action.payload };
    default:
      return state;
  }
}
