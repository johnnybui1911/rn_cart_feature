import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import numeral from "numeral";
import axios from "../../library/api";
import icons, { loadingIcon } from "../../res/icons";
import styles from "./styles";
import Description from "./Description";
import CountButton from "./CountButton";
import palette from "../../res/palette";

const initialProduct = {
  name: "Strawberries",
  price: 7.1,
  photo_url: "/shop/products/92/photo"
};

const INITIAL_API_URL = "/shop/products/92";

export default class DetailScreen extends React.Component {
  static navigationOptions = {
    title: "PRODUCT",
    headerRight: icons.cartIcon
  };

  constructor(props) {
    super(props);
    this.state = {
      product: {},
      isLoading: true
    };
  }

  componentDidMount = () => {
    this._getData();
  };

  _getData = () => {
    /* get product_url from ItemCard in CartScreen in order to retrieve data from API product */
    const API_URL = this.props.navigation.getParam(
      "product_url",
      INITIAL_API_URL
    );
    axios
      .get(API_URL)
      .then(response => {
        const product = response.data;
        this.setState({ product: { ...product, count: 0 }, isLoading: false });
      })
      .catch(error => {
        this.setState({ isLoading: true });
      });
  };

  _handlePlus = () => {
    this.setState(prevState => ({
      product: { ...prevState.product, count: prevState.product.count + 1 }
    }));
  };

  _handleSubtract = () => {
    const { count } = this.state.product;
    if (count > 0) {
      this.setState(prevState => ({
        product: { ...prevState.product, count: prevState.product.count - 1 }
      }));
    }
  };
  _handleBuyNow = () => {
    this.setState(prevState => ({
      product: { ...prevState.product, count: 0 }
    }));
  };

  _renderTotalPrice = () => {
    const { count, price } = this.state.product;
    const totalPrice = count * price;
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center"
        }}
      >
        <Text style={styles.mediumSizeText}>PRICE</Text>
        <Text style={{ fontWeight: "bold", color: palette.secondaryColor }}>
          $
          <Text style={styles.totalPriceText}>
            {numeral(totalPrice).format("0.0")}
          </Text>
        </Text>
      </View>
    );
  };

  render() {
    const { product, isLoading } = this.state;
    const index = this.props.navigation.getParam(
      "index",
      1
    ); /* get index params from cart view to render image (index % 5) */
    const item = { ...product, index };
    return (
      <SafeAreaView style={styles.container}>
        {isLoading ? (
          <View style={styles.loading}>{loadingIcon}</View>
        ) : (
          <View style={styles.item}>
            <Description {...item} />
            <CountButton
              count={item.count}
              _handlePlus={this._handlePlus}
              _handleSubtract={this._handleSubtract}
            />
            {this._renderTotalPrice()}
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.buy_now_button}
              colors={["#ff6443", "#f5462d", "#eb1818"]}
            >
              <TouchableOpacity onPress={() => this._handleBuyNow()}>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  BUY NOW
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        )}
      </SafeAreaView>
    );
  }
}
