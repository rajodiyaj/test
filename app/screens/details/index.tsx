import * as React from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Feather";
import SafeView from "components/SafeView";
import { t } from "@i18n/index";
import Chart from "@components/Chart";
import Switcher from "@components/range/Switcher";
import Table from "@components/Table";
import Placeholder from "rn-placeholder";

interface Props {
  isFetchingStocks: boolean;
  currentRange: string;
  graph: [number];
  shallowData: any;
  item: {
    Ticker?: string;
    Price?: string;
    companyName?: string;
    stocks?: any;
    componentId: string;
  };
  onBackPress: () => void;
  fetchStockHistory: (symbol: string) => void;
  updateRange: (days: number) => void;
}

interface State {}
class Details extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchStockHistory(this.props.item.Ticker);
  }

  goBackToHome = () => {
    Navigation.pop(this.props.componentId);
  };

  selectRange = (range: any) => {
    this.props.updateRange(range);
  };
  render() {
    const {
      graph,
      shallowData,
      currentRange = "10D",
      isFetchingStocks,
      item: { Ticker = "AAPL", companyName = "Apple Inc.", Price = "10" } = {}
    } = this.props;

    return (
      <View style={styles.outerWrapper}>
        <SafeView style={styles.safeView} />
        <SafeView style={styles.whiteBackground}>
          <View style={styles.container}>
            <View style={styles.mainContainer}>
              <TouchableOpacity onPress={this.goBackToHome}>
                <Icon name="arrow-left" size={28} color="#FFF" />
              </TouchableOpacity>
              <View>
                <Text style={styles.title}>{Ticker}</Text>
              </View>
              <View>
                <Text
                  style={styles.subTitle}
                  ellipsizeMode={"tail"}
                  numberOfLines={1}
                >
                  {companyName}
                </Text>
              </View>
              <View style={styles.rangeContainer}>
                <Switcher
                  current={currentRange}
                  onSelectRange={this.selectRange}
                />
              </View>
            </View>
            <View style={styles.dataContainer}>
              <View style={styles.absoluteContainer}>
                <View style={styles.chartContainer}>
                  <View style={styles.chartHeaderContainer}>
                    <View style={styles.tickerContainer}>
                      <Text style={styles.ticker}>{Ticker}</Text>
                    </View>
                    <View style={styles.priceContainer}>
                      <Text style={[styles.ticker, styles.price]}>
                        ${Price}
                      </Text>
                    </View>
                  </View>
                  <Chart
                    data={graph}
                    height={100}
                    fill={"#FFEBC6"}
                    stroke={"#F2DA9F"}
                  />
                </View>
                <View style={styles.tableContainer}>
                  <Placeholder.ImageContent
                    size={60}
                    animate="fade"
                    lineNumber={4}
                    lineSpacing={5}
                    lastLineWidth="30%"
                    onReady={!isFetchingStocks}
                  >
                    <Table data={shallowData} />
                  </Placeholder.ImageContent>
                </View>
              </View>
            </View>
          </View>
        </SafeView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8"
  },
  whiteBackground: {
    backgroundColor: "#F8F8F8"
  },
  safeView: {
    flex: 0,
    backgroundColor: "#0362CF"
  },
  mainContainer: {
    backgroundColor: "#0362CF",
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30
  },
  title: {
    fontFamily: "BrandonText-Bold",
    fontSize: 35,
    color: "#FFF",
    letterSpacing: 1,
    textAlign: "center"
  },
  ticker: {
    fontFamily: "BrandonText-Bold",
    fontSize: 20,
    color: "#3d3d3d",
    letterSpacing: 1
  },
  subTitle: {
    fontFamily: "BrandonText-Bold",
    fontSize: 13,
    color: "#F8F8F8",
    letterSpacing: 1,
    textAlign: "center"
  },
  price: {
    textAlign: "right"
  },
  dataContainer: {
    flex: 1,
    backgroundColor: "#F8F8F8"
  },
  rangeContainer: {
    marginTop: 20
  },
  absoluteContainer: {
    flex: 1,
    position: "absolute",
    width: "90%",
    left: "5%",
    top: -20,
    bottom: 0,
    zIndex: 10
  },
  chartContainer: {
    borderRadius: 5,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  chartHeaderContainer: {
    borderBottomColor: "#C8C8C8",
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 5,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row", // main axis
    justifyContent: "flex-start", // main axis
    alignItems: "center" // cross axis
  },
  tableContainer: {
    flex: 1,
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    }
  },
  tickerContainer: {
    flex: 1
  },
  priceContainer: {
    width: 80,
    justifyContent: "center",
    textAlign: "right"
  }
});

const mapStatesToProps = ({ details }: any) => {
  return {
    ...details
  };
};

const mapDispatchToProps = ({
  details: { fetchStockHistory, updateRange }
}: any) => ({
  fetchStockHistory: (symbol: string) => fetchStockHistory(symbol),
  updateRange: (days: number) => updateRange(days)
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(Details);
