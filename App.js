import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F8F8F8"
  },
  item: {
    flex: 2,
    backgroundColor: "white",
    flexDirection: "row",
    // alignItems: "center",
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
    margin: 5
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
  }
];

const getItem = (item, handleIncrement, handleDecrement) => {
  let imgSource = "";
  switch (item.imgID) {
    case 1:
      imgSource = require("./img/item1.png");
      break;
    case 2:
      imgSource = require("./img/item2.png");
      break;
    case 3:
      imgSource = require("./img/item3.png");
      break;
    default:
      imgSource = "";
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
          <Text style={({ fontSize: 12 }, styles.description)}>{item.des}</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center"
          }}
        >
          <Text style={{ fontWeight: "bold", color: "red" }}>
            $
            {JSON.stringify(item.price).indexOf(".") >= 0
              ? item.price
              : JSON.stringify(item.price) + ".00"}
          </Text>
        </View>
      </View>
      <View style={styles.rightBarButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleIncrement(item.id)}
        >
          <Text> + </Text>
        </TouchableOpacity>
        <Text>{item.quantity}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleDecrement(item.id)}
        >
          <Text> - </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
      totalItem: 0,
      totalPrice: 0,
      totalQuantity: 0
    };
  }

  componentDidMount = () => {
    this.setState({ itemList: initialList }, () =>
      this.setState(prevState => ({
        totalItem: prevState.itemList.length
      }))
    );
  };

  handleItem = () => {
    this.setState(prevState => ({
      totalItem: prevState.totalItem + 1
    }));
  };

  // + button
  handleIncrement = id => {
    let item = this.state.itemList.find(items => items.id === id); // find item by id
    item.quantity += 1; // increment quantity by 1

    const tmpList = this.state.itemList; //get itemList state
    tmpList.filter(items => items.id === item.id).map(() => item); // filter by item found above and then replace the old item

    this.setState({ itemList: tmpList }, this.getTotalQuantity);
  };

  // - button
  handleDecrement = id => {
    let item = this.state.itemList.find(items => items.id === id); // find item by id
    if (item.quantity !== 0) {
      item.quantity -= 1; // decrement quantity by 1

      const tmpList = this.state.itemList; //get itemList state
      tmpList.filter(items => items.id === item.id).map(() => item); // filter by item found above and then replace the old item

      this.setState({ itemList: tmpList }, this.getTotalQuantity);
    }
  };

  getTotalQuantity = () => {
    let { itemList, totalQuantity } = this.state;
    totalQuantity = 0;
    itemList.map(item => {
      totalQuantity += item.quantity;
    });

    this.setState({ totalQuantity }, this.getTotalPrice);
  };

  getTotalPrice = () => {
    let { itemList, totalPrice } = this.state;
    totalPrice = 0;
    itemList.map(item => {
      totalPrice += item.quantity * item.price;
    });
    totalPrice = totalPrice.toFixed(2);

    this.setState({ totalPrice });
  };

  handlePlaceOrder = () => {
    let tmpList = this.state.itemList;
    tmpList.map(item => (item.quantity = 0));
    this.setState({ itemList: tmpList }, this.getTotalQuantity);
  };

  render() {
    const { totalItem, totalPrice, totalQuantity } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text>
              <Text style={styles.title}>{totalItem}</Text>{" "}
              <Text style={styles.description}>Items</Text>
            </Text>
          </View>
          {this.state.itemList.map(item =>
            getItem(item, this.handleIncrement, this.handleDecrement)
          )}
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
              <Text style={styles.title}>${totalPrice}</Text>
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
              onPress={() => this.handlePlaceOrder()}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
