import React from "react";
import { View, FlatList } from "react-native";
import ItemCard from "./ItemCard";

const renderItem = ({ item }) => {
  return <ItemCard item={item} />;
};

const FlatListItem = ({ cart }) => {
  const { products } = cart;
  return (
    <View
      style={{
        height: "80%",
        width: "100%"
      }}
    >
      <FlatList
        data={products}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default FlatListItem;
