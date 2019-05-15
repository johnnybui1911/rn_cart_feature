/* eslint-disable import/prefer-default-export */
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export default {
  searchIcon: (
    <Icon.Button name="search" size={20} backgroundColor="white" color="grey" />
  ),
  cartIcon: (
    <Icon.Button
      name="shopping-cart"
      size={20}
      backgroundColor="white"
      color="grey"
    />
  ),
  plusIcon: <Icon name="plus-circle" size={30} color="#B5B5B5" />,
  minusIcon: <Icon name="minus-circle" size={30} color="#B5B5B5" />
};
