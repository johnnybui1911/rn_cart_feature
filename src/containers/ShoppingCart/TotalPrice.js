import React from "react";
import { View, Text } from "react-native";
import numeral from "numeral";
import styles from "./styles";

const TotalPrice = ({ cart }) => {
  const { products, count } = cart;
  let totalPrice = 0;
  products.forEach(product => {
    totalPrice += product.count * product.price;
  });
  totalPrice = numeral(totalPrice).format("$0.00");

  return (
    <View style={styles.footer}>
      <View
        style={{
          flex: 2,
          alignItems: "flex-end",
          justifyContent: "flex-end"
        }}
      >
        <Text>Total: </Text>
      </View>
      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "flex-end"
        }}
      >
        <Text style={[styles.primaryText, { fontSize: 20 }]}>{totalPrice}</Text>
      </View>
      <View
        style={{
          flex: 2,
          alignItems: "flex-end",
          justifyContent: "flex-end"
        }}
      >
        <Text>Quantity: </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-end"
        }}
      >
        <Text style={[styles.primaryText, { fontSize: 20 }]}>{count}</Text>
      </View>
    </View>
  );
};

export default TotalPrice;
