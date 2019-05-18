import React from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "./components/Home/HomeScreen";
import ListScreen from "./components/List/ListScreen";
import DetailScreen from "./components/Detail/DetailScreen";
import CartIcon from "./containers/Header/ShoppingCartIcon/CartIcon";
import ShoppingCartScreen from "./components/ShoppingCart/ShoppingCartScreen";
import palette from "./res/palette";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "HOME"
      }
    },
    List: {
      screen: ListScreen,
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
