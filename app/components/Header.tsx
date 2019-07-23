import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";

interface Props {
  title?: string;
}

export default class Header extends React.PureComponent<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  _onLanguagesChange = ({ language }: any) => {
    i18n.locale = language;
  };

  componentDidMount() {
    RNLocalize.addEventListener("change", this._onLanguagesChange);
  }

  render() {
    const { children, title } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0362CF",
    paddingBottom: 10,
    paddingTop: 10,
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center"
  },
  titleContainer: {
    padding: 20,
    paddingBottom: 0
  },
  title: {
    fontFamily: "BrandonText-Black",
    fontSize: 35,
    color: "#FFF"
  }
});
