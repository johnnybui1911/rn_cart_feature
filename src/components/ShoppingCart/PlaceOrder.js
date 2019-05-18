import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";
import removeItems from "../../actions/removeItems";
import styles from "./styles";

const PlaceOrder = ({ handlePlaceOrder }) => {
  return (
    <TouchableOpacity
      style={styles.buttonPlace}
      onPress={() => handlePlaceOrder()}
    >
      <Text style={{ color: "white", fontWeight: "bold" }}>Place Order</Text>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = dispatch => ({
  handlePlaceOrder() {
    dispatch(removeItems());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(PlaceOrder);
