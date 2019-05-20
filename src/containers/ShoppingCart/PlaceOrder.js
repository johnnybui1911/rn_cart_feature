import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";

const PlaceOrder = ({ handlePlaceOrder, navigation }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <TouchableOpacity
          style={styles.buttonLater}
          onPress={() => navigation.navigate("AllList")}
        >
          <Text style={{ color: "black", fontWeight: "bold" }}>LATER</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 2, alignItems: "center" }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.checkout_button}
          colors={["#ff6443", "#f5462d", "#eb1818"]}
        >
          <TouchableOpacity
            // style={styles.buttonPlace}
            onPress={() => handlePlaceOrder()}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              CHECK OUT
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default PlaceOrder;
