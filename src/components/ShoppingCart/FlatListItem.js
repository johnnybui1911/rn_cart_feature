import React from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import ItemCard from "./ItemCard";

const renderItem = ({ item }) => {
  return <ItemCard item={item} />;
};

const FlatListItem = ({ products }) => {
  console.log(products);
  return (
    <FlatList
      data={products}
      keyExtractor={(item, index) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

const mapStateToProps = state => ({
  products: state.cart.products
});

export default connect(mapStateToProps)(FlatListItem);
