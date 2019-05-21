/* eslint-disable import/prefer-default-export */
import {
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_SUCCESSFUL,
  GET_PRODUCTS_REJECTED,
  REFRESH_PRODUCTS
} from "../assets/actionTypes";
import axios from "../library/api";

const fetchDataPending = isLoading => {
  return { type: GET_PRODUCTS_PENDING, payload: isLoading };
};

const fetchDataSuccessful = (products, isAllList) => {
  return {
    type: GET_PRODUCTS_SUCCESSFUL,
    payload: products,
    isLoading: false,
    isAllList
  };
};

const fetchDataRejected = errorMessage => {
  return {
    type: GET_PRODUCTS_REJECTED,
    payload: errorMessage,
    isLoading: true
  };
};

export const refreshData = () => {
  return {
    type: REFRESH_PRODUCTS,
    isLoading: true,
    isRefreshing: true
  };
};

/* thunk function */
export const getProducts = PRODUCTS_URL => {
  return (dispatch, getState) => {
    dispatch(fetchDataPending(true));

    axios
      .get(PRODUCTS_URL)
      .then(response => response.data)
      .then(responseData => {
        // const { products } = responseData;
        // products.map(product => {
        //   axios
        //     .get(product.product_url)
        //     .then(r => r.data)
        //     .then(rData => {
        //       getState().productsState.products.push(rData);
        //     });
        // });
        dispatch(
          fetchDataSuccessful(
            responseData.products,
            PRODUCTS_URL.indexOf("limit") > -1
          )
        );
      })
      .catch(error => {
        dispatch(fetchDataRejected(error));
      });
  };
};
