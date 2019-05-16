import { StyleSheet } from "react-native";

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
  image: { height: 120, width: 120 },
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
