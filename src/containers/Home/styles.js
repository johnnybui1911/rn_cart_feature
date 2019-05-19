import { StyleSheet } from "react-native";
import palette from "../../res/palette";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: palette.mainBackground,
    justifyContent: "center"
  },
  item: {
    height: 140,
    marginVertical: 10,
    marginRight: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    backgroundColor: palette.primaryColor,
    borderRadius: 12
  },
  title_category: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff"
  },
  titleView: {
    flex: 2,
    justifyContent: "center",
    paddingLeft: 10,
    backgroundColor: palette.primaryColor
  },
  shopIconView: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 100,
    width: 100,
    elevation: 10,
    left: 45,
    borderRadius: 12
  }
});
