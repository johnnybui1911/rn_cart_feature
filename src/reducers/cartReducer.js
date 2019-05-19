/* eslint-disable function-paren-newline */
import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  REMOVE_ALL_ITEMS,
  SET_INIT_CART
} from "../res/actionTypes";

const initialCartState = {
  products: [],
  count: 0
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case SET_INIT_CART: {
      return action.payload;
    }
    case ADD_ITEM: {
      /* whether product in cart or not */
      const inCartProduct = state.products.find(
        product => product.id === action.payload.id
      );
      let products = [];

      if (inCartProduct) {
        /* If product added before */
        inCartProduct.count += action.payload.count;
        products = [...state.products];
      } else {
        /* If product added as new */
        products = [...state.products, action.payload];
      }

      /* count total product */
      let count = 0;
      products.forEach(product => {
        count += product.count;
      });
      return { ...state, products, count };
    }

    case INCREMENT_ITEM: {
      const { products } = state;
      const editProduct = products.find(product => product.id === action.id);
      editProduct.count += 1;

      /* count total product */
      let count = 0;
      products.forEach(product => {
        count += product.count;
      });
      return { ...state, products, count };
    }

    case DECREMENT_ITEM: {
      const { products } = state;
      const editProduct = products.find(product => product.id === action.id);
      editProduct.count -= 1;

      /* count total product */
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

    case REMOVE_ALL_ITEMS: {
      return { ...state, products: [], count: 0 };
    }
    default:
      return state;
  }
};

export default cartReducer;
