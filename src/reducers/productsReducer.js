/* eslint-disable default-case */
import {
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_SUCCESSFUL,
  GET_PRODUCTS_REJECTED,
  REFRESH_PRODUCTS
} from "../assets/actionTypes";

const initialState = {
  products: [],
  isLoading: true,
  isAllList: true,
  isRefreshing: false,
  errorMessage: ""
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_PENDING: {
      return { ...state, isLoading: action.payload, isRefreshing: true };
    }
    case GET_PRODUCTS_SUCCESSFUL: {
      return {
        ...state,
        products: action.payload,
        isLoading: action.isLoading,
        isAllList: action.isAllList,
        isRefreshing: false
      };
    }
    case GET_PRODUCTS_REJECTED: {
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: action.isLoading
      };
    }
    case REFRESH_PRODUCTS: {
      return {
        ...state,
        isLoading: action.isLoading,
        isRefreshing: action.isRefreshing
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
