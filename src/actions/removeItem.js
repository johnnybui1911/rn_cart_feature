import { REMOVE_ITEM } from "../res/actionTypes";

const removeItem = id => {
  return { type: REMOVE_ITEM, id };
};

export default removeItem;
