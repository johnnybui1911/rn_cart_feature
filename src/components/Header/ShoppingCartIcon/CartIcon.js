import React from "react";
import { View, Text, Platform } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const CartIcon = props => {
  const { cart, onpress } = props;
  return (
    <View
      style={[
        { padding: 5, paddingRight: 20 },
        Platform.OS === "android" ? styles.iconContainer : null
      ]}
    >
      <Icon
        onPress={() => onpress()}
        name="shopping-cart"
        size={30}
        color="#fff"
      />
      <View style={styles.badge}>
        <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 12 }}>
          {cart.count}
        </Text>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(CartIcon);
