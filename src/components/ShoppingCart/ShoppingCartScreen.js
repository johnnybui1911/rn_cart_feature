/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { connect } from "react-redux";
import styles from "./styles";
import TotalPrice from "./TotalPrice";
import TotalItem from "./TotalItem";
import FlatListItem from "./FlatListItem";
import PlaceOrder from "./PlaceOrder";
import icons from "../../res/icons";

const ShoppingCartScreen = ({ cart, navigation }) => {
  return (
    <SafeAreaView forceInset={{ top: "always" }} style={{ flex: 1 }}>
      {cart.count === 0 ? (
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
                navigation.goBack();
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                CONTINUE SHOPPING
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      ) : (
        <React.Fragment>
          <View style={styles.container}>
            <TotalItem />
            <FlatListItem />
            <TotalPrice />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={styles.buttonLater}>
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  Later
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <PlaceOrder />
            </View>
          </View>
        </React.Fragment>
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(ShoppingCartScreen);
