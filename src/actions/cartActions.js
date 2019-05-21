import {
  ADD_PRODUCT,
  DECREMENT_PRODUCT,
  INCREMENT_PRODUCT,
  REMOVE_PRODUCT,
  REMOVE_ALL_PRODUCTS
} from "../assets/actionTypes";

// export const setInitCart = data => {
//   return {
//     type: SET_INIT_CART,
//     payload: data
//   };
// };

export const addProduct = product => {
  return { type: ADD_PRODUCT, payload: product };
};

export const decrementProduct = id => {
  return { type: DECREMENT_PRODUCT, id };
};

export const incrementProduct = id => {
  return { type: INCREMENT_PRODUCT, id };
};

export const removeProduct = id => {
  return { type: REMOVE_PRODUCT, id };
};

export const removeProducts = () => {
  return { type: REMOVE_ALL_PRODUCTS };
};

/* Use normal Async Storage */

// store to local storage
// export const storeAsyncCart = () => {
//   return (dispatch, getState) => {
//     AsyncStorage.setItem("cart", JSON.stringify(getState().cart)).catch(error =>
//       console.log(error)
//     );
//   };
// };

// thunk function, return function not object
// get cart data in local storage when starting the app
// export const getAsyncCart = () => {
//   return dispatch => {
//     AsyncStorage.getItem("cart").then(result => {
//       dispatch(setInitCart(JSON.parse(result)));
//     });
//   };
// };
