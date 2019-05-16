import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import axios from "../../library/api";
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
      limit: 5
    };
  }

  componentDidMount = () => {
    this._getData();
  };

  _getData = () => {
    const { navigation } = this.props;
    const API_URL = navigation.getParam(
      "category_url",
      "/shop/categories/Fruits"
    );
    axios
      .get(API_URL)
      .then(response =>
        this.setState({
          products: response.data.products
        })
      )
      .catch(error => console.log(error));
  };

  _handleLoadMore = () => {
    this.setState(prevState => ({
      limit: prevState.limit + 5
    }));
  };

  _renderListProduct = () => {
    const { products, limit } = this.state;
    return (
      <FlatList
        data={products.slice(0, limit)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this._renderItem}
        onEndReached={this._handleLoadMore}
        onEndReachedThreshold={2}
      />
    );
  };

  _renderItem = ({ item, index }) => {
    const { navigation } = this.props;
    const props = { item, index, navigation };
    return <ItemCard {...props} />;
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this._renderListProduct()}
      </SafeAreaView>
    );
  }
}
