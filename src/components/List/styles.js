import { StyleSheet } from "react-native";
import palette from "../../res/palette";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  item: {
    height: 140,
    margin: 10,
    flexDirection: "row",
    justifyContent: "center",
    elevation: 3,
    backgroundColor: "#fff",
    borderRadius: 12
  },
  placeholderMedia: {
    height: 100,
    width: 100,
    backgroundColor: palette.primaryColorLight
  },
  placeholderLine: {
    backgroundColor: palette.primaryColorLight
  },
  primaryText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000"
  },
  secondaryText: {
    fontSize: 16,
    color: "#B5B5B5"
  }
});
