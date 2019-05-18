import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F8F8F8"
  },
  item: {
    paddingLeft: 10,
    height: 150,
    backgroundColor: "white",
    flexDirection: "row",
    margin: 5
  },
  header: {
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    margin: 20
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10
  },
  buttonLater: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF"
  },
  buttonPlace: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#3FD357"
  },
  description: {
    color: "#B5B5B5"
  },
  title: {
    fontWeight: "bold",
    color: "#000000"
  },
  rightBarButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 2,
    borderLeftColor: "#F8F8F8"
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
  },
  primaryText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000000"
  },
  secondaryText: {
    fontWeight: "bold",
    color: "#B5B5B5"
  }
});
