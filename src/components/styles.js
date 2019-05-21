import { StyleSheet } from "react-native";
import palette from "../assets/palette";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: palette.mainBackground,
    justifyContent: "center"
  },
  loading_view: {
    flex: 1,
    justifyContent: "center"
  },
  buy_now_button: {
    backgroundColor: "transparent",
    width: 300,
    height: 40,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    bottom: -20,
    borderRadius: 20,
    elevation: 5
  }
});
