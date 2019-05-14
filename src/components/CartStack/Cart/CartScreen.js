import React from "react";
import { SafeAreaView, FlatList, Text } from "react-native";
import axios from "../../../api";
import icons from "../../../res/icons";
import styles from "./styles";
import { ProductCard } from "./ProductCard";

export default class CartScreen extends React.Component {
  static navigationOptions = {
    title: "PRODUCT",
    headerRight: icons.cartIcon,
    headerStyle: {
      backgroundColor: "#fff"
    },
    headerTintColor: "grey"
  };

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: true
    };
  }

  componentDidMount = () => {
    this._getProductFromCategory();
  };

  _getProductFromCategory = () => {
    const { navigation } = this.props;
    const API = navigation.getParam("category_url", "/shop/categories/Nuts");
    axios
      .get(API)
      .then(response =>
        this.setState({
          products: response.data.products,
          isLoading: false
        })
      )
      .catch(() => this.setState({ isLoading: true }));
  };

  _renderListProduct = () => {
    const { products } = this.state;
    return (
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this._renderItem}
      />
    );
  };

  _renderItem = ({ item, index }) => {
    const { navigation } = this.props;
    const props = { item, index, navigation };
    return <ProductCard {...props} />;
  };

  render() {
    const { isLoading } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {isLoading ? <Text>Loading...</Text> : this._renderListProduct()}
      </SafeAreaView>
    );
  }
}
