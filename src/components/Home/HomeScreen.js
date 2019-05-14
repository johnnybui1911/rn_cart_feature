/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { SafeAreaView, FlatList, Text } from "react-native";
import axios from "../../api";
import styles from "./styles";
import { CategoryCard } from "./CategoryCard";

const API_URL = "/shop/categories/";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "HOME"
  };

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      isLoading: true
    };
  }

  componentDidMount = () => {
    this._getCategories();
  };

  _getCategories = () => {
    axios
      .get(API_URL)
      .then(response => {
        this.setState({
          categories: response.data.categories,
          isLoading: false
        });
      })
      .catch(error => this.setState({ isLoading: true }));
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
    return <CategoryCard {...props} />;
  };

  render() {
    const { isLoading } = this.state;
    return (
      <SafeAreaView styles={styles.container}>
        {isLoading ? <Text>Loading...</Text> : this._renderListCategory()}
      </SafeAreaView>
    );
  }
}
