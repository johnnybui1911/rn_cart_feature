/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { createAppContainer } from "react-navigation";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./stores";
// import AppNavigator from "./AppNavigator";
import { DashboardStackNavigator } from "./DashboardStackNavigator";

const AppContainer = createAppContainer(DashboardStackNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}
