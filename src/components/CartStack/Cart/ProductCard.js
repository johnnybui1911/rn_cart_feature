/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import images from "../../../res/images";
import styles from "./styles";

export const ProductCard = props => {
  const { item, navigation } = props;
  const { name, product_url } = item;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", { product_url })}
    >
      <View style={styles.item}>
        <Image source={images.fruit1} style={styles.image} />
        <View style={{ flex: 3 }}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={styles.primaryText}>{name.toUpperCase()}</Text>
            <Text style={styles.secondaryText}>
              Apple is the best thing ever
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center"
            }}
          >
            <Text style={{ fontWeight: "bold", color: "red", fontSize: 20 }}>
              $5.3
              <Text style={styles.secondaryText}> /kg</Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
