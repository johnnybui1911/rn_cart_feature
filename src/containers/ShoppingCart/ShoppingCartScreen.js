/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { SafeAreaView, View } from "react-native";
import { connect } from "react-redux";
import TotalPrice from "./TotalPrice";
import TotalItem from "./TotalItem";
import FlatListItem from "./FlatListItem";
import PlaceOrder from "./PlaceOrder";
import { removeItems } from "../../actions/cartActions";
import styles from "./styles";
import EmptyBagScreen from "./EmptyBagScreen";

const ShoppingCartScreen = ({ cart, handlePlaceOrder, navigation }) => {
  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      {cart.count === 0 ? (
        <EmptyBagScreen navigation={navigation} />
      ) : (
        <View style={styles.card}>
          <TotalItem cart={cart} />
          <FlatListItem cart={cart} />
          <TotalPrice cart={cart} />
          <PlaceOrder
            handlePlaceOrder={handlePlaceOrder}
            navigation={navigation}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  handlePlaceOrder() {
    dispatch(removeItems());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartScreen);
