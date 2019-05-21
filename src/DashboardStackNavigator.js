import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeScreen from "./containers/Home/HomeScreen";
import ListStack from "./containers/ShoppingList/ListStack";
import palette from "./assets/palette";

import ShoppingCartScreen from "./containers/ShoppingCart/ShoppingCartScreen";
import CartIcon from "./components/Header/ShoppingCartIcon/CartIcon";
import ListScreen from "./containers/ShoppingList/List/ListScreen";
import DetailScreen from "./containers/ShoppingList/Detail/DetailScreen";

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    List: {
      screen: ListScreen,
      navigationOptions: ({ navigation }) => ({
        title: navigation.getParam("category_name", "")
      })
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: () => ({
        title: "DETAIL"
      })
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: "HOME",
      headerRight: <CartIcon onpress={() => navigation.navigate("Cart")} />,
      headerStyle: {
        backgroundColor: palette.primaryColor
      },
      headerTintColor: "#fff"
    }),
    headerLayoutPreset: "center"
  }
);

const CartStack = createStackNavigator(
  {
    Cart: ShoppingCartScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: "CART",
      // headerLeft: <CartIcon onpress={() => navigation.navigate("List")} />,
      headerRight: <CartIcon onpress={() => navigation.navigate("Cart")} />,
      headerStyle: {
        backgroundColor: palette.primaryColor
      },
      headerTintColor: "#fff"
    }),
    headerLayoutPreset: "center"
  }
);

export const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: () => ({
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={30} color={tintColor} />
        )
      })
    },
    ListStack: {
      screen: ListStack,
      navigationOptions: () => ({
        tabBarLabel: "List",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="list" size={25} color={tintColor} />
        )
      })
    }
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      activeTintColor: palette.primaryColor,
      inactiveTintColor: "#858585",
      style: {
        height: 60,
        paddingVertical: 5,
        backgroundColor: "#fff"
      },
      labelStyle: {
        fontSize: 12,
        lineHeight: 20
      }
    },
    tabBarPosition: "bottom",
    animationEnabled: true,
    swipeEnabled: true
  }
);

export const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: {
      screen: DashboardTabNavigator
    },
    Cart: {
      screen: CartStack
    }
  },
  {
    headerMode: "none"
  }
);
