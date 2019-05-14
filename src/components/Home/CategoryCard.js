/* eslint-disable import/prefer-default-export */
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import images from "../../res/images";
import { colors } from "../../res/colors";

export const CategoryCard = props => {
  const { item, index, navigation } = props;
  const { name, category_url } = item;
  const colorID = props.index % 5;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Cart", { category_url })}
    >
      <View style={styles.item}>
        <View
          style={{
            backgroundColor: colors[colorID],
            flex: 2,
            justifyContent: "center",
            paddingLeft: 10
          }}
        >
          <Text style={styles.title_category}>
            {`${name.toUpperCase()} LIST`}
          </Text>
        </View>
        <Image source={images.fruit1} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};
