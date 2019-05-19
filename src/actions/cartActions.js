import AsyncStorage from "@react-native-community/async-storage";
import {
  ADD_ITEM,
  DECREMENT_ITEM,
  INCREMENT_ITEM,
  REMOVE_ITEM,
  REMOVE_ALL_ITEMS,
  SET_INIT_CART
} from "../res/actionTypes";

// export const setInitCart = data => {
//   return {
//     type: SET_INIT_CART,
//     payload: data
//   };
// };

export const addItem = product => {
  return { type: ADD_ITEM, payload: product };
};

export const decrementItem = id => {
  return { type: DECREMENT_ITEM, id };
};

export const incrementItem = id => {
  return { type: INCREMENT_ITEM, id };
};

export const removeItem = id => {
  return { type: REMOVE_ITEM, id };
};

export const removeItems = () => {
  return { type: REMOVE_ALL_ITEMS };
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
