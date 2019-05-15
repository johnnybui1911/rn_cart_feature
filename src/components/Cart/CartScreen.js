import React from "react";
import { SafeAreaView, FlatList, Text } from "react-native";
import axios from "../../api";
import icons from "../../res/icons";
import styles from "./styles";
import ItemCard from "./ItemCard";

const initialProducts = [
  {
    name: "Cashew Nuts",
    product_url: "/shop/products/53"
  },
  {
    name: "Hazelnuts",
    product_url: "/shop/products/59"
  }
];

export default class CartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: true
    };
  }

  componentDidMount = () => {
    this._getData();
  };

  _getData = () => {
    const { navigation } = this.props;
    const API_URL = navigation.getParam(
      "category_url",
      "/shop/categories/Nuts"
    );
    axios
      .get(API_URL)
      .then(response =>
        this.setState({
          products: response.data.products.filter(
            (product, index) => index < 100
          ),
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
    return <ItemCard {...props} />;
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
