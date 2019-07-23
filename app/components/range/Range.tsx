import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  name: string;
  active: boolean;
  onPress: (range: string) => void;
}
interface State {}
export default class Range extends React.Component<Props, State> {
  onPress = () => {
    const { name, onPress } = this.props;
    onPress(name);
  };

  render() {
    const { name, active } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        <View style={[styles.view, active ? styles.activeView : {}]}>
          <Text style={[styles.text, active ? styles.active : {}]}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  text: {
    textAlign: "center",
    color: "rgba(255,255,255,0.5)",
    fontFamily: "BrandonText-Medium",
    fontSize: 12
  },
  view: {
    borderRadius: 5,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  activeView: {
    backgroundColor: "rgba(14,63,125, 0.5)"
  },
  active: {
    color: "#FFFFFF"
  }
});
