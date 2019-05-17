import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import numeral from "numeral";
import axios from "../../library/api";
import { loadingIcon } from "../../res/icons";
import styles from "./styles";
import palette from "../../res/palette";
import Description from "./Description";
import CountButton from "./CountButton";
import AddItemButton from "../../containers/Detail/AddItemButton";

const initialProduct = {
  name: "Strawberries",
  price: 7.1,
  photo_url: "/shop/products/92/photo"
};

const INITIAL_API_URL = "/shop/products/92";

export default class DetailScreen extends React.Component {
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
        const id = API_URL.toString().substring(API_URL.lastIndexOf("/") + 1);
        const product = response.data;
        this.setState({
          product: { id, ...product, count: 0 },
          isLoading: false
        });
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
  // _handleBuyNow = () => {
  //   this.setState(prevState => ({
  //     product: { ...prevState.product, count: 0 }
  //   }));
  // };

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
    const index = this.props.navigation.getParam("index", 1);
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
            <AddItemButton product={product} />
          </View>
        )}
      </SafeAreaView>
    );
  }
}
