import { createStackNavigator } from "react-navigation";
import icons from "../../res/icons";
import CartScreen from "./Cart/CartScreen";
import DetailScreen from "./Detail/DetailScreen";

const CartStack = createStackNavigator(
  {
    CartScreen: CartScreen,
    DetailScreen: DetailScreen
  },
  {
    initialRouteName: "DetailScreen",
    navigationOptions: {
      title: "PRODUCT",
      headerRight: icons.cartIcon,
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTintColor: "grey"
    }
  }
);

export default CartStack;
