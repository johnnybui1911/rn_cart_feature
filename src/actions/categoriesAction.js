/* eslint-disable import/prefer-default-export */
import {
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESSFUL,
  GET_CATEGORIES_REJECTED
} from "../assets/actionTypes";
import axios, { DEFAULT_CATEGORIES_URL } from "../library/api";

const fetchDataPending = isLoading => {
  return { type: GET_CATEGORIES_PENDING, payload: isLoading };
};

const fetchDataSuccessful = categories => {
  return {
    type: GET_CATEGORIES_SUCCESSFUL,
    payload: categories,
    isLoading: false
  };
};

const fetchDataRejected = errorMessage => {
  return {
    type: GET_CATEGORIES_REJECTED,
    payload: errorMessage,
    isLoading: false
  };
};

/* thunk function return dispatch function */
export const getCategories = () => {
  return dispatch => {
    // dispatch fetchDataPending to set isLoading true
    dispatch(fetchDataPending(true));

    // then get data from API
    axios
      .get(DEFAULT_CATEGORIES_URL)
      .then(response => {
        // set the categories to the data from api
        dispatch(
          fetchDataSuccessful(
            response.data.categories.filter(item => item.name)
          )
        );
        // error handle the promise and set your errorMessage
      })
      .catch(error => dispatch(fetchDataRejected(error)));
  };
};
