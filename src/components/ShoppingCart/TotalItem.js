import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";

const TotalItem = ({ products }) => {
  return (
    <View style={styles.header}>
      <Text>
        <Text style={styles.title}>{products.length}</Text>{" "}
        <Text style={styles.description}>Items</Text>
      </Text>
    </View>
  );
};

const mapStateToProps = state => ({
  products: state.cart.products
});

export default connect(mapStateToProps)(TotalItem);
