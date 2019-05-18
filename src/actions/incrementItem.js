import { INCREMENT_ITEM } from "../res/actionTypes";

const incrementItem = id => {
  return { type: INCREMENT_ITEM, id };
};

export default incrementItem;
