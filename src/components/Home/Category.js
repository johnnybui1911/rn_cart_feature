/* eslint-disable import/prefer-default-export */
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import icons from "../../res/icons";

export const Category = props => {
  const { item, index, navigation } = props;
  const { name, category_url } = item;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Cart", { category_url })}
    >
      <View style={styles.item}>
        <View style={styles.titleView}>
          <Text style={styles.title_category}>{name.toUpperCase()} LIST</Text>
        </View>
        <View style={styles.shopIconView}>{icons.gemIcon}</View>
      </View>
    </TouchableOpacity>
  );
};
