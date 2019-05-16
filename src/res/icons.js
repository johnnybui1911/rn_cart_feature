/* eslint-disable import/prefer-default-export */
import React from "react";
import { ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import palette from "../res/palette";

export default {
  searchIcon: (
    <Icon.Button
      name="search"
      size={20}
      backgroundColor={palette.primaryColor}
      color="#fff"
    />
  ),
  cartIcon: (
    <Icon.Button
      name="shopping-cart"
      size={20}
      backgroundColor={palette.primaryColor}
      color="#fff"
    />
  ),
  plusIcon: <Icon name="plus-circle" size={30} color="#B5B5B5" />,
  minusIcon: <Icon name="minus-circle" size={30} color="#B5B5B5" />,
  gemIcon: <Icon name="shopping-bag" size={50} color={palette.primaryColor} />
};

export const loadingIcon = (
  <ActivityIndicator size="large" color={palette.primaryColor} />
);
