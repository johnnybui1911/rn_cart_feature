import { StyleSheet } from "react-native";
import palette from "../../res/palette";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
    bottom: 40,
    backgroundColor: "#fff"
  },
  loading: {
    height: 300,
    alignItems: "center"
  },
  item: {
    height: 450,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 12
  },
  primaryText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000000"
  },
  secondaryText: {
    fontWeight: "bold",
    color: "#B5B5B5"
  },
  totalPriceText: {
    fontSize: 40,
    fontWeight: "bold",
    color: palette.secondaryColor
  },
  mediumSizeText: {
    fontWeight: "bold",
    color: "#B5B5B5",
    fontSize: 20
  },
  image: {
    height: 200,
    width: 200
  },
  buy_now_button: {
    backgroundColor: palette.secondaryColor,
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

export default styles;
