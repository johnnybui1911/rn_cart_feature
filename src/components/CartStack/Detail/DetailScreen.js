import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import icons from "../../../res/icons";
import styles from "./styles";
import images from "../../../res/images";

const initialProduct = {
  name: "Strawberries",
  price: 7.1,
  photo_url: "/shop/products/92/photo"
};

export default class DetailScreen extends React.Component {
  static navigationOptions = {
    title: "PRODUCT",
    headerRight: icons.cartIcon,
    headerStyle: {
      backgroundColor: "#fff"
    },
    headerTintColor: "grey"
  };

  constructor(props) {
    super(props);
    this.state = {
      product: initialProduct,
      isLoading: true
    };
  }

  // componentDidMount = () => {
  //   this.setState({ product: initialProduct });
  // };

  render() {
    const { product } = this.state;
    const { name, price } = product;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View
            style={{
              height: 500,
              margin: 5,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#B5B5B5"
            }}
          >
            <View
              style={{
                flex: 2,
                alignItems: "center",
                top: -120
              }}
            >
              <Image style={styles.image} source={images.fruit1} />
              <View
                style={{
                  flex: 2,
                  alignItems: "center"
                }}
              >
                <Text style={styles.primaryText}>{name.toUpperCase()}</Text>
                <Text>${price} / kg</Text>
                <Text>Strawberry containe</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row"
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "flex-end"
                }}
              >
                {icons.minusIcon}
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center"
                }}
              >
                <Text>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1 }}>
                {icons.plusIcon}
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center"
              }}
            >
              <Text>PRICE</Text>
              <Text style={{ color: "red", fontSize: 40, fontWeight: "bold" }}>
                $ 11.8
              </Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: "red",
                width: 200,
                height: 40,
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
                bottom: -20,
                borderRadius: 20
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                BUY NOW
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
