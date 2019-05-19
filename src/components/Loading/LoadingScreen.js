import React from "react";
import { SafeAreaView, View } from "react-native";
import { loadingIcon } from "../../res/icons";
import styles from "../styles";

const LoadingScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.loading_view}>{loadingIcon}</View>
  </SafeAreaView>
);

export default LoadingScreen;
