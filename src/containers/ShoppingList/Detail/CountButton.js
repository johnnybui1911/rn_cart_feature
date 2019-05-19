/* eslint-disable react/prop-types */
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import icons from "../../../res/icons";

const CountButton = ({ count, _handlePlus, _handleSubtract }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal: 100
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "flex-end"
        }}
      >
        <TouchableOpacity onPress={() => _handleSubtract()}>
          {icons.minusIcon}
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center"
        }}
      >
        <Text>{count}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => _handlePlus()}>
          {icons.plusIcon}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CountButton;
