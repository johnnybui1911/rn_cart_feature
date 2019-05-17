import { ADD_ITEM } from "../res/actionTypes";

const addItem = product => {
  return { type: ADD_ITEM, payload: product };
};

export default addItem;
