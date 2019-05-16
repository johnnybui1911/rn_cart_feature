import { createStackNavigator } from "react-navigation";
import HomeScreen from "./Home/HomeScreen";
import icons from "../res/icons";
import CartScreen from "./Cart/CartScreen";
import DetailScreen from "./Detail/DetailScreen";
import palette from "../res/palette";

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
        backgroundColor: palette.primaryColor
      },
      headerTintColor: "#fff"
    },
    headerLayoutPreset: "center"
  }
);

export default AppNavigator;
