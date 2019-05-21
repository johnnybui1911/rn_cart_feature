/* eslint-disable default-case */
import {
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESSFUL,
  GET_CATEGORIES_REJECTED
} from "../assets/actionTypes";

const initialCategoriesState = {
  categories: [],
  isLoading: true,
  errorMessage: ""
};

const categoriesReducer = (state = initialCategoriesState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_PENDING: {
      return { ...state, isLoading: action.payload };
    }
    case GET_CATEGORIES_SUCCESSFUL: {
      return {
        ...state,
        categories: action.payload,
        isLoading: action.isLoading
      };
    }
    case GET_CATEGORIES_REJECTED: {
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: action.isLoading
      };
    }
    default:
      return state;
  }
};

export default categoriesReducer;
