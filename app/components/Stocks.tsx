import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";

interface Props {
  item: {
    Ticker: string;
    companyName: string;
    Price: number;
  };
  onPress?: (item: any) => void;
  componentId: string;
}

interface State {}

class Stocks extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
  }

  onPressed = (event: any) => {
    const { onPress, item } = this.props;
    Navigation.push(this.props.componentId, {
      component: {
        name: "navigation.smr.Details",
        passProps: {
          item
        }
      }
    });
  };

  render() {
    const {
      item: { Ticker, companyName, Price }
    } = this.props;

    return (
      <TouchableOpacity onPress={this.onPressed}>
        <View style={styles.container}>
          <View style={styles.nameContainer}>
            <Text style={styles.ticker}>{Ticker}</Text>
            <Text
              style={styles.companyName}
              ellipsizeMode={"tail"}
              numberOfLines={1}
            >
              {companyName}
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price} adjustsFontSizeToFit>
              ${Price.toFixed(2)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // main axis
    justifyContent: "flex-start", // main axis
    alignItems: "center", // cross axis
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1
  },
  nameContainer: {
    flex: 1
  },
  ticker: {
    fontFamily: "BrandonText-Bold",
    fontSize: 20,
    color: "#3d3d3d",
    letterSpacing: 1
  },
  companyName: {
    fontFamily: "BrandonText-Medium",
    fontSize: 12,
    color: "#b5b3b3",
    letterSpacing: 1,
    width: "85%"
  },
  priceContainer: {
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  price: {
    fontFamily: "BrandonText-Bold",
    fontSize: 20,
    color: "#3d3d3d",
    letterSpacing: 1
  }
});

const mapStatesToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(Stocks);
