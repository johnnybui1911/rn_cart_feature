import React from "react";
import { Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { connect } from "react-redux";
import { addProduct } from "../../actions/cartActions";
import styles from "../styles";

const AddProductButton = props => {
  const { _addProductToCart, product, _handleButtonClick } = props;
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
          _addProductToCart(product);
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>ADD TO CART</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const mapDispatchToProps = dispatch => ({
  _addProductToCart: product => {
    if (product.count !== 0) {
      dispatch(addProduct(product));
    }
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddProductButton);
