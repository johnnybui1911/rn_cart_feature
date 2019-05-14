import { createStackNavigator } from "react-navigation";
import HomeScreen from "./Home/HomeScreen";
import icons from "../res/icons";
import CartScreen from "./CartStack/Cart/CartScreen";
import DetailScreen from "./CartStack/Detail/DetailScreen";

// eslint-disable-next-line import/prefer-default-export
export const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Cart: CartScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerRight: icons.searchIcon,
      headerStyle: {
        backgroundColor: "green"
      },
      headerTintColor: "white"
    }
  }
);
