import { StyleSheet } from "react-native";
import palette from "../../../assets/palette";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#fff"
  },
  loading: {
    height: 300,
    alignItems: "center"
  },
  item: {
    height: 450,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 40
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
  }
});

export default styles;
