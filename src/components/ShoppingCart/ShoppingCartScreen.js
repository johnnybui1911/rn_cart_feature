import React from "react";
import numeral from "numeral";
import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import palette from "../../res/palette";
import images from "../../res/images";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F8F8F8"
  },
  item: {
    height: 150,
    backgroundColor: "white",
    flexDirection: "row",
    margin: 5
  },
  header: {
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    margin: 20
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10
  },
  buttonLater: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF"
  },
  buttonPlace: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#3FD357"
  },
  description: {
    color: "#B5B5B5"
  },
  title: {
    fontWeight: "bold",
    color: "#000000"
  },
  rightBarButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 2,
    borderLeftColor: "#F8F8F8"
  }
});

const initialList = [
  {
    id: 1,
    name: "JBL Flip 3",
    des: "Bluetooth Speakers / Black",
    price: 165,
    quantity: 0,
    imgID: 1
  },
  {
    id: 2,
    name: "Philips QT4006/15",
    des: "Hair Removal / Trimmer",
    price: 21.49,
    quantity: 0,
    imgID: 2
  },
  {
    id: 3,
    name: "JBL Flip 3 Travel Case",
    des: "Accessories / Case",
    price: 10.49,
    quantity: 0,
    imgID: 3
  },
  {
    id: 4,
    name: "JBL Flip 4 Travel Case",
    des: "Accessories / Case",
    price: 10.49,
    quantity: 0,
    imgID: 3
  },
  {
    id: 5,
    name: "JBL Flip 4 Travel Case",
    des: "Accessories / Case",
    price: 10.49,
    quantity: 0,
    imgID: 3
  }
];

export default class ShoppingCartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
      totalItem: 0
    };
  }

  componentDidMount = () => {
    this.setState({ itemList: initialList }, () =>
      this.setState(prevState => ({
        totalItem: prevState.itemList.length
      }))
    );
  };

  _renderListItem = () => {
    return (
      <FlatList
        data={this.state.itemList}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={this._renderItem}
      />
    );
  };

  _renderItem = ({ item }) => {
    let imgSource = "";
    switch (item.imgID) {
      case 1:
        imgSource = images.fruits[1];
        break;
      case 2:
        imgSource = images.fruits[2];
        break;
      case 3:
        imgSource = images.fruits[3];
        break;
      default:
        imgSource = undefined; /* undefined or null */
    }
    return (
      <View key={item.id} style={styles.item}>
        <Image source={imgSource} style={{ height: "100%", flex: 2 }} />
        <View
          style={{
            flex: 3
          }}
        >
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={({ fontSize: 12 }, styles.description)}>
              {item.des}
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
            onPress={() => this._handleIncrement(item.id)}
          >
            <Text> + </Text>
          </TouchableOpacity>
          <Text>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._handleDecrement(item.id)}
          >
            <Text> - </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  // + button
  // CALLBACK QUA NHIEU, CHI SET STATE 1 LAN, VI NEU CALL BACK NHU THE RENDER LAI QUA NHIEU
  _handleIncrement = id => {
    this.setState(prevState => ({
      itemList: prevState.itemList.map(item => {
        if (item.id == id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    }));
  };

  // - button
  _handleDecrement = id => {
    this.setState(prevState => ({
      itemList: prevState.itemList.map(item => {
        if (item.id == id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    }));
  };

  // -placeOrder reset quantity
  _handlePlaceOrder = () => {
    this.setState(prevState => ({
      itemList: prevState.itemList.map(item => {
        return { ...item, quantity: 0 };
      })
    }));
  };

  // use function render view, before it process the data list in state to calculate totalPrice and Quantity
  // it help reduce the time we need to re-render, just one setState process for item quantity in plus and substract button
  _renderTotalPrice = () => {
    const { itemList } = this.state;
    let totalPrice = 0;
    itemList.forEach(item => {
      totalPrice += item.quantity * item.price;
    });
    //  NUMERALJS
    totalPrice = numeral(totalPrice).format("$0.00");

    let totalQuantity = 0;
    itemList.forEach(item => {
      totalQuantity += item.quantity;
    });

    return (
      <View style={styles.footer}>
        <View
          style={{
            flex: 2,
            alignItems: "flex-end"
          }}
        >
          <Text>Total: </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center"
          }}
        >
          <Text style={styles.title}>{totalPrice}</Text>
        </View>
        <View
          style={{
            flex: 2,
            alignItems: "flex-end"
          }}
        >
          <Text>Quantity: </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center"
          }}
        >
          <Text style={styles.title}>{totalQuantity}</Text>
        </View>
      </View>
    );
  };

  render() {
    const { totalItem } = this.state;
    return (
      <SafeAreaView forceInset={{ top: "always" }} style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text>
              <Text style={styles.title}>{totalItem}</Text>{" "}
              <Text style={styles.description}>Items</Text>
            </Text>
          </View>
          {/* Flat list item */}
          {this._renderListItem()}
          {this._renderTotalPrice()}
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.buttonLater}>
              <Text style={{ color: "black", fontWeight: "bold" }}>Later</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.buttonPlace}
              onPress={() => this._handlePlaceOrder()}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
