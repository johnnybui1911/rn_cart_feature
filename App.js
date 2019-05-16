import React from "react";
import { createAppContainer } from "react-navigation";
import AppNavigator from "./src/components/AppNavigator";

const AppContainer = createAppContainer(AppNavigator);

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
