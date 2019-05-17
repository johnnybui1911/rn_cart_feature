import React from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "./Home/HomeScreen";
import icons from "../res/icons";
import CartScreen from "./Cart/CartScreen";
import DetailScreen from "./Detail/DetailScreen";
import palette from "../res/palette";
import CartIcon from "../containers/Header/ShoppingCartIcon/CartIcon";
import ShoppingCartScreen from "./ShoppingCart/ShoppingCartScreen";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "HOME"
      }
    },
    Cart: {
      screen: CartScreen,
      navigationOptions: {
        title: "PRODUCT"
      }
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        title: "PRODUCT"
      }
    },
    ShoppingCart: {
      screen: ShoppingCartScreen,
      navigationOptions: ({ navigation }) => ({
        title: "CART"
      })
    }
  },
  {
    initialRouteName: "Cart",
    defaultNavigationOptions: ({ navigation }) => ({
      headerRight: (
        <CartIcon onpress={() => navigation.navigate("ShoppingCart")} />
      ),
      headerStyle: {
        backgroundColor: palette.primaryColor
      },
      headerTintColor: "#fff"
    }),
    headerLayoutPreset: "center"
  }
);

export default AppNavigator;
