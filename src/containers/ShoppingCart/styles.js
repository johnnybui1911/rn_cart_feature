import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#F8F8F8"
  },
  card: {
    flex: 1,
    height: 450,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 40
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
  header: {
    height: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10
  },
  buttonLater: {
    backgroundColor: "#FFFFFF",
    width: 100,
    height: 40,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    bottom: -13,
    borderRadius: 20,
    elevation: 30
  },
  checkout_button: {
    backgroundColor: "transparent",
    width: 200,
    height: 40,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    bottom: -13,
    borderRadius: 20,
    elevation: 30
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
