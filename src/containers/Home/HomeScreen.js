import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";
import { Category } from "./Category";
import LoadingScreen from "../../components/Loading/LoadingScreen";
import { getCategories } from "../../actions/categoriesAction";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.getCategories();
  };

  _renderListCategory = () => {
    const { categories } = this.props.categoriesState;
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
    const { isLoading } = this.props.categoriesState;
    return (
      <SafeAreaView style={styles.container}>
        {isLoading ? <LoadingScreen /> : this._renderListCategory()}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  categoriesState: state.categoriesState
});

const mapDispatchToProps = {
  getCategories
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
