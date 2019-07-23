import * as React from "react";
import { StyleSheet, View } from "react-native";
import Range from "./Range";

interface Props {
  ranges?: [string];
  current: string;
  onSelectRange: () => void;
}
interface State {}

export default class Switcher extends React.Component<Props, State> {
  render() {
    const defaultRanges = ["10D", "20D", "30D",  "60D", "MAX"];
    const { ranges = defaultRanges, current, onSelectRange } = this.props;
    return (
      <View style={styles.container}>
        {ranges.map((name: string, index: number) => (
          <Range
            name={name}
            active={current === name}
            onPress={onSelectRange}
            key={index}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: "5%",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
