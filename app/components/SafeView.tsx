import * as React from "react";
import { SafeAreaView, Platform, View, StyleSheet } from "react-native";

interface Props {
  children?: any;
  style?: any;
}
export default class Page extends React.PureComponent<Props, {}> {
  render() {
    const { children, style } = this.props;
    return Platform.select({
      ios: (
        <SafeAreaView style={[styles.container, style]}>
          {children}
        </SafeAreaView>
      ),
      android: <View style={[styles.container, style]}>{children}</View>
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8"
  }
});
