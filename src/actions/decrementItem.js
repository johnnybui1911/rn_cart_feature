import { DECREMENT_ITEM } from "../res/actionTypes";

const incrementItem = id => {
  return { type: DECREMENT_ITEM, id };
};

export default incrementItem;
