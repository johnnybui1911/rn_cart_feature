import React from "react";
import { View } from "react-native";
import Placeholder, { Line, Media } from "rn-placeholder";
import styles from "./styles";

/* Placeholder Content Loading For Item List */
const PlaceholderLoading = () => (
  <Placeholder
    // isReady={isReady}
    animation="fade"
    // whenReadyRender={() => <ComponentLoaded />}
    renderLeft={() => (
      <View style={{ bottom: 10 }}>
        <Media style={styles.placeholderMedia} />
      </View>
    )}
    // renderRight={() => <Media />}
  >
    <View style={{ left: 20, top: 10 }}>
      <Line width="50%" style={styles.placeholderLine} />
      <Line style={styles.placeholderLine} />
      <Line width="30%" style={styles.placeholderLine} />
    </View>
  </Placeholder>
);

export default PlaceholderLoading;
