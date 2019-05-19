import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import icons from "../../res/icons";

const EmptyBagScreen = ({ navigation }) => (
  <View
    style={[
      styles.container,
      { justifyContent: "center", alignItems: "center" }
    ]}
  >
    {icons.shoppingIcon}
    <Text style={[styles.primaryText, { fontSize: 20, paddingTop: 25 }]}>
      Your bag is empty
    </Text>
    <Text style={[{ fontWeight: "normal" }]}>
      Items added to your bag will show up here
    </Text>
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.buy_now_button}
      colors={["#ff6443", "#f5462d", "#eb1818"]}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("List");
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          CONTINUE SHOPPING
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  </View>
);

export default EmptyBagScreen;
