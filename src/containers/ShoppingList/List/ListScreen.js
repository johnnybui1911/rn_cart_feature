import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import axios from "../../../library/api";
import styles from "./styles";
import ItemCard from "./ItemCard";
import { loadingIcon } from "../../../res/icons";

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

export default class ListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      limit: 5,
      isRefreshing: false,
      isLoading: true,
      isAllList: true
    };
  }

  componentDidMount = () => {
    this._getData();
  };

  _getData = () => {
    const { navigation } = this.props;
    // default param is API_ALL_PRODUCTS with limit
    // if list is navigated from Home, so its param is based on category
    const API_URL = navigation.getParam(
      "category_url",
      `/shop/products/?limit=${this.state.limit}`
    );
    axios
      .get(API_URL)
      .then(response =>
        this.setState({
          products: response.data.products,
          isLoading: false,
          isRefreshing: false,
          isAllList: API_URL.indexOf("limit") > -1
        })
      )
      .catch(error =>
        this.setState({
          isLoading: true,
          isRefreshing: false
        })
      );
  };

  _handleLoadMore = () => {
    const { isAllList } = this.state;
    if (isAllList) {
      // if it is all list, everytime limit increased by 5, fetch data again with updated limit
      this.setState(
        prevState => ({
          limit: prevState.limit + 5
        }),
        this._getData()
      );
    } else {
      this.setState(prevState => ({
        limit: prevState.limit + 5
      }));
    }
  };

  /* Pull to refresh, su dung ca isLoading de the hien ro rang hon */
  _onRefresh = () => {
    this.setState({ isRefreshing: true, limit: 5 }, this._getData());
  };

  _renderListProduct = () => {
    const { products, limit, isRefreshing } = this.state;
    return (
      <FlatList
        data={products.slice(0, limit)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this._renderItem}
        onEndReached={this._handleLoadMore}
        onEndReachedThreshold={5}
        onRefresh={() => this._onRefresh()}
        refreshing={isRefreshing}
      />
    );
  };

  _renderItem = ({ item, index }) => {
    const { isRefreshing } = this.state;
    const { navigation } = this.props;
    const props = { item, index, navigation, isRefreshing };
    return <ItemCard {...props} />;
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.isLoading ? loadingIcon : this._renderListProduct()}
      </SafeAreaView>
    );
  }
}
