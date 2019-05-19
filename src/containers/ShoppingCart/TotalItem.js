import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const TotalItem = ({ cart }) => {
  const { products } = cart;
  return (
    <View style={styles.header}>
      <Text>
        <Text style={[styles.primaryText, { fontSize: 20 }]}>
          {products.length}
        </Text>{" "}
        <Text style={styles.description}>items</Text>
      </Text>
    </View>
  );
};

export default TotalItem;
