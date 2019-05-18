import React from "react";
import { View, Text } from "react-native";
import numeral from "numeral";
import { connect } from "react-redux";
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
          alignItems: "flex-end"
        }}
      >
        <Text>Total: </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center"
        }}
      >
        <Text style={styles.title}>{totalPrice}</Text>
      </View>
      <View
        style={{
          flex: 2,
          alignItems: "flex-end"
        }}
      >
        <Text>Quantity: </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center"
        }}
      >
        <Text style={styles.title}>{count}</Text>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(TotalPrice);
