import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
    bottom: 40
  },
  item: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#B5B5B5"
  },
  primaryText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000"
  },
  secondaryText: {
    color: "#B5B5B5"
  },
  image: {
    height: 200,
    width: 200
  }
});

export default styles;
