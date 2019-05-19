import React from "react";
import { createStackNavigator } from "react-navigation";
import ListScreen from "../ShoppingList/List/ListScreen";
import DetailScreen from "../ShoppingList/Detail/DetailScreen";
import CartIcon from "../../components/Header/ShoppingCartIcon/CartIcon";
import palette from "../../res/palette";

const ListStack = createStackNavigator(
  {
    List: {
      screen: ListScreen
    },
    Detail: {
      screen: DetailScreen
    }
  },
  {
    headerMode: "none"
  }
  // {
  //   defaultNavigationOptions: ({ navigation }) => ({
  //     title: "LIST",
  //     headerRight: <CartIcon onpress={() => navigation.navigate("Cart")} />,
  //     headerStyle: {
  //       backgroundColor: palette.primaryColor
  //     },
  //     headerTintColor: "#fff"
  //   }),
  //   headerLayoutPreset: "center"
  // }
);

export default ListStack;
