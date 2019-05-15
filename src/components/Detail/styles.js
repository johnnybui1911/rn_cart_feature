import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
    bottom: 40
  },
  item: {
    height: 450,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#B5B5B5"
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
    color: "red"
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
    backgroundColor: "red",
    width: 300,
    height: 40,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    bottom: -20,
    borderRadius: 20
  }
});

export default styles;
