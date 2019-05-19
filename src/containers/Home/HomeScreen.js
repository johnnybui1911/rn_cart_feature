/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { SafeAreaView, View, FlatList, Text } from "react-native";
import axios from "../../library/api";
import styles from "./styles";
import { Category } from "./Category";
import LoadingScreen from "../../components/Loading/LoadingScreen";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      isLoading: true
    };
  }

  componentDidMount = () => {
    this._getData();
  };

  _getData = () => {
    const API_URL = "/shop/categories/";
    axios
      .get(API_URL)
      .then(response => {
        this.setState({
          categories: response.data.categories.filter(item => item.name),
          isLoading: false
        });
      })
      .catch(() => this.setState({ isLoading: true }));
  };

  _renderListCategory = () => {
    const { categories } = this.state;
    return (
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this._renderCategory}
      />
    );
  };

  _renderCategory = ({ item, index }) => {
    const { navigation } = this.props;
    const props = { item, index, navigation };
    return <Category {...props} />;
  };

  render() {
    const { isLoading } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {isLoading ? <LoadingScreen /> : this._renderListCategory()}
      </SafeAreaView>
    );
  }
}
