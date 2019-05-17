/* eslint-disable function-paren-newline */
import { ADD_ITEM, REMOVE_ITEM } from "../res/actionTypes";

const initialCartState = {
  products: [],
  count: 0
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const inCartProduct = state.products.find(
        product => product.id === action.payload.id
      );

      let products = [];
      if (inCartProduct) {
        inCartProduct.count = action.payload.count;
        products = [...state.products];
      } else {
        products = [...state.products, action.payload];
      }

      let count = 0;
      products.forEach(product => {
        count += product.count;
      });
      return { ...state, products, count };
    }
    case REMOVE_ITEM: {
      const products = state.products.filter(
        product => product.id !== action.id
      );

      let count = 0;
      products.forEach(product => {
        count += product.count;
      });
      return { ...state, products, count };
    }
    default:
      return state;
  }
};

export default cartReducer;
