import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import rootReducer from "../reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["categoriesState", "productsState"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

/* --------- Normal AsyncStorage -------------- */
// Dispatch the getAsyncStorage() action directly on the store.
// store.dispatch(getAsyncCart());
