import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  item: {
    height: 150,
    margin: 5,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#B5B5B5"
  },
  image: { flex: 2, height: "100%" },
  primaryText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000"
  },
  secondaryText: {
    color: "#B5B5B5"
  }
});
