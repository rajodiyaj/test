import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

interface Props {
  status: number;
}

interface State {}

export default class Button extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { status = 0 } = this.props;

    let text = "BUY",
      style = styles.buy;
    if (status == 1) {
      text = "SELL";
      style = styles.sell;
    }
    if (status == 2) {
      text = "HOLD";
      style = styles.hold;
    }

    return (
      <View style={[styles.bshButton, style]}>
        <Text style={[styles.text, styles.white]}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bshButton: {
    padding: 2,
    paddingLeft: 7,
    paddingRight: 7,
    borderRadius: 10
  },
  text: {
    fontFamily: "BrandonText-Medium",
    fontSize: 14,
    color: "#3d3d3d"
  },
  buy: {
    backgroundColor: "#00AF64"
  },
  sell: {
    backgroundColor: "#F56A42"
  },
  hold: {
    backgroundColor: "#FECD64"
  },
  white: {
    color: "#FFF"
  }
});
