import { createStackNavigator } from "react-navigation";
import HomeScreen from "./Home/HomeScreen";
import icons from "../res/icons";
import CartScreen from "./Cart/CartScreen";
import DetailScreen from "./Detail/DetailScreen";

// eslint-disable-next-line import/prefer-default-export
export const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home"
      }
    },
    Cart: {
      screen: CartScreen,
      navigationOptions: {
        title: "PRODUCT",
        headerRight: icons.cartIcon
      }
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        title: "PRODUCT",
        headerRight: icons.cartIcon
      }
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerRight: icons.searchIcon,
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTintColor: "grey"
    },
    headerLayoutPreset: "center"
  }
);
