/* eslint-disable react/prop-types */
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";
import palette from "../../assets/palette";
import images from "../../assets/images";
import icons from "../../assets/icons";
import {
  incrementProduct,
  decrementProduct,
  removeProduct
} from "../../actions/cartActions";

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount = () => {
    this.setState({ count: this.props.item.count });
  };

  _handlePlusButton = id => {
    this.setState(
      prevState => ({
        count: prevState.count + 1
      }),
      this.props._handleIncrement(id)
    );
  };

  _handleMinusButton = id => {
    /* if user click minus when item quantity is 1, item is removed from cart */
    if (this.state.count > 1) {
      this.setState(
        prevState => ({
          count: prevState.count - 1
        }),
        this.props._handleDecrement(id)
      );
    } else {
      this.props._handleRemoveProduct(id);
    }
  };

  render() {
    const { item } = this.props;
    const imgID = item.id % 5;
    return (
      <View key={item.id} style={styles.item}>
        <View
          style={{ flex: 2, alignItems: "center", justifyContent: "center" }}
        >
          <Image source={images.fruits[imgID]} resizeMode="center" />
        </View>
        <View
          style={{
            paddingHorizontal: 20
          }}
        >
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={({ fontSize: 12 }, styles.description)}>
              Apple is my favourite fruit
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center"
            }}
          >
            <Text style={{ fontWeight: "bold", color: palette.secondaryColor }}>
              ${item.price}
            </Text>
          </View>
        </View>
        <View style={styles.rightBarButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this._handlePlusButton(item.id);
            }}
          >
            {icons.plusIcon}
          </TouchableOpacity>
          <Text>{this.state.count}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this._handleMinusButton(item.id);
            }}
          >
            {icons.minusIcon}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  products: state.cart.products
});

const mapDispatchToProps = dispatch => ({
  _handleIncrement: id => {
    dispatch(incrementProduct(id));
  },
  _handleDecrement: id => {
    dispatch(decrementProduct(id));
  },
  _handleRemoveProduct: id => {
    dispatch(removeProduct(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCard);
