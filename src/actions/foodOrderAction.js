import { FOODITEMS, ZeroItem, ITEM } from "./types";
import foodItems from "../assets/foodItem.json";

export const foodItemsaction = () => async dispatch => {
  console.log(foodItems);
  dispatch({
    type: FOODITEMS,
    payload: foodItems
  });
};

export const sortByPrice = way => dispatch => {
  let data = foodItems;
  console.log(data, way);
  if (way) {
    data.sort((a, b) => a.price - b.price);
    dispatch({
      type: FOODITEMS,
      payload: data
    });
  } else {
    data.sort((a, b) => b.price - a.price);
    dispatch({
      type: FOODITEMS,
      payload: data
    });
  }
};

export const searchByName = str => dispatch => {
  let data = foodItems;
  let rawdata = [];
  var pattern = str
    .toLowerCase()
    .split("")
    .map(x => {
      return `(?=.*${x})`;
    })
    .join("");
  var regex = new RegExp(`${pattern}`, "g");
  for (let i = 0; i < data.length; i++) {
    if (regex.test(data[i].itemname.toLowerCase())) {
      rawdata.push(data[i]);
    }
  }
  dispatch({
    type: FOODITEMS,
    payload: rawdata
  });
};

export const addItem = value => dispatch => {
  console.log(value);
  dispatch({
    type: ZeroItem,
    payload: !value
  });
};

export const selectedItem = value => dispatch => {
  console.log(value);
  dispatch({
    type: ITEM,
    payload: !value
  });
};
export const GetselectedItem = value => dispatch => {
  console.log(value);
  dispatch({
    type: "get"
  });
};
