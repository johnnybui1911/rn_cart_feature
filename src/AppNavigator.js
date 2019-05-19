import React from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "./containers/Home/HomeScreen";
import CartIcon from "./components/Header/ShoppingCartIcon/CartIcon";
import ShoppingCartScreen from "./containers/ShoppingCart/ShoppingCartScreen";
import ListStack from "./containers/ShoppingList/ListStack";
import palette from "./res/palette";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "HOME"
      }
    },
    ListStack: {
      screen: ListStack,
      navigationOptions: {
        title: "PRODUCT"
      }
    },
    Cart: {
      screen: ShoppingCartScreen,
      navigationOptions: ({ navigation }) => ({
        title: "CART"
      })
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: ({ navigation }) => ({
      headerRight: <CartIcon onpress={() => navigation.navigate("Cart")} />,
      headerStyle: {
        backgroundColor: palette.primaryColor
      },
      headerTintColor: "#fff"
    }),
    headerLayoutPreset: "center"
  }
);

export default AppNavigator;
