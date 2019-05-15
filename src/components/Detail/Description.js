import React from "react";
import { View, Image, Text } from "react-native";
import numeral from "numeral";
import styles from "./styles";
import images from "../../res/images";

const Description = props => {
  const { name, price, index } = props;
  const imgID = index % 5;
  return (
    <View
      style={{
        flex: 2,
        alignItems: "center",
        top: -120
      }}
    >
      <Image style={styles.image} source={images.fruits[imgID]} />
      <View
        style={{
          flex: 2,
          alignItems: "center"
        }}
      >
        <Text style={styles.primaryText}>{name.toUpperCase()}</Text>
        <Text style={styles.secondaryText}>
          $
          <Text style={styles.mediumSizeText}>
            {numeral(price).format("0.0")}
          </Text>
          / kg
        </Text>
        <Text>Strawberry contain berry</Text>
      </View>
    </View>
  );
};

export default Description;
