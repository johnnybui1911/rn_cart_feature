import React from "react";
import { Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { connect } from "react-redux";
import addItem from "../../actions/addItem";
import styles from "./styles";

const AddItemButton = props => {
  const { _addItemToCart, product, _handleButtonClick } = props;
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.buy_now_button}
      colors={["#ff6443", "#f5462d", "#eb1818"]}
    >
      <TouchableOpacity
        onPress={() => {
          _handleButtonClick();
          _addItemToCart(product);
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>ADD TO CART</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const mapDispatchToProps = dispatch => ({
  _addItemToCart: product => {
    if (product.count !== 0) {
      dispatch(addItem(product));
    }
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddItemButton);
