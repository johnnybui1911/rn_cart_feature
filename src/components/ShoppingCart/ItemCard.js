/* eslint-disable react/prop-types */
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";
import palette from "../../res/palette";
import images from "../../res/images";
import icons from "../../res/icons";
import incrementItem from "../../actions/incrementItem";
import decrementItem from "../../actions/decrementItem";
import removeItem from "../../actions/removeItem";

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
      this.props._handleRemoveItem(id);
    }
  };

  render() {
    const { item } = this.props;
    const imgID = item.id % 5;
    return (
      <View key={item.id} style={styles.item}>
        <Image
          source={images.fruits[imgID]}
          style={{ height: "100%", flex: 2 }}
        />
        <View
          style={{
            flex: 3
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
    dispatch(incrementItem(id));
  },
  _handleDecrement: id => {
    dispatch(decrementItem(id));
  },
  _handleRemoveItem: id => {
    dispatch(removeItem(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCard);
