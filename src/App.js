import React from "react";
import { createAppContainer } from "react-navigation";
import { Provider } from "react-redux";
import store from "./store";
import AppNavigator from "./AppNavigator";

const AppContainer = createAppContainer(AppNavigator);

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
