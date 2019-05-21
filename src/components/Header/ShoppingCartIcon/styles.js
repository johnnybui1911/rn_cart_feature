import { StyleSheet } from "react-native";
import palette from "../../../assets/palette";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  iconContainer: {
    paddingLeft: 20,
    paddingTop: 10,
    marginRight: 5
  },
  badge: {
    position: "absolute",
    height: 23,
    width: 23,
    borderRadius: 15,
    backgroundColor: palette.secondaryColor,
    right: 5,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2000 // make it arrange font
  }
});

export default styles;
