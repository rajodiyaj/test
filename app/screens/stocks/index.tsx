import * as React from "react";
import { StyleSheet, View, FlatList, StatusBar, Text } from "react-native";
import { connect } from "react-redux";
import SafeView from "components/SafeView";
import { t } from "@i18n/index";
import Header from "@components/Header";
import Symbols from "@data/symbols";
import Stocks from "@components/Stocks";
import Search from "react-native-search-box";
import News from "@components/News";
import { sliderWidth, itemWidth } from "@lib/index";
import Placeholder from "rn-placeholder";
import _ from "lodash";

interface Props {
  symbols: any;
  shallowSymbols: any;
  social: any;
  isFetchingStocks: boolean;
  isFetchingSocialMedia: boolean;
  componentId: string;
  fetchStocks: () => void;
  fetchSocialMedia: () => void;
  updateStocks: (stocks: any) => void;
}

interface State {}

class Home extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSocialMedia();
    this.props.fetchStocks();
  }

  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  onSearch = (text: string) => {
    return new Promise((resolve: any, reject: any) => {
      console.log("SearchText :", text);
      console.log("Add your search function here.");
      resolve();
    });
  };

  onChangeText = (text: string) => {
    return new Promise((resolve: any, reject: any) => {
      const filter = _.filter(this.props.symbols, v => {
        return _.startsWith(v.Ticker, text.toUpperCase());
      });
      this.props.updateStocks(filter);
      resolve();
    });
  };

  onCancel = () => {
    return new Promise((resolve: any, reject: any) => {
      this.props.updateStocks(this.props.symbols);
      resolve();
    });
  };

  render() {
    const {
      symbols = [],
      shallowSymbols = [],
      social = [],
      isFetchingStocks = false,
      isFetchingSocialMedia = false
    } = this.props;
    return (
      <View style={styles.outerWrapper}>
        <StatusBar barStyle={"light-content"} />
        <SafeView style={styles.safeView} />
        <SafeView style={styles.whiteBackground}>
          <View style={styles.container}>
            <Header title={t("STOCKS")} />
            <View style={styles.searchContainer}>
              <Search
                ref="search_box"
                onSearch={this.onSearch}
                onCancel={this.onCancel}
                onChangeText={this.onChangeText}
                backgroundColor={"#0362CF"}
              />
            </View>
            <View style={styles.listContainer}>
              <Placeholder.ImageContent
                size={60}
                animate="fade"
                lineNumber={4}
                lineSpacing={5}
                lastLineWidth="30%"
                onReady={!isFetchingStocks}
              >
                <FlatList
                  data={shallowSymbols}
                  ItemSeparatorComponent={this.renderSeparator}
                  renderItem={({ item }) => (
                    <Stocks item={item} componentId={this.props.componentId} />
                  )}
                  keyExtractor={(item: any, index: number) => item.Ticker}
                />
              </Placeholder.ImageContent>
            </View>
            <View style={styles.newsContainer}>
              <Text style={styles.news}>{t("NEWS")}</Text>
              <View style={styles.newsSlider}>
                <News
                  data={social}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                />
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
  whiteBackground: {
    backgroundColor: "#F8F8F8"
  },
  safeView: {
    flex: 0,
    backgroundColor: "#0362CF"
  },
  container: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    margin: 0,
    backgroundColor: "#F8F8F8",
    paddingTop: 10
  },
  separator: {
    height: 15
  },
  searchContainer: {
    paddingBottom: 5,
    backgroundColor: "#0362CF",
    marginBottom: 0
  },
  newsContainer: {
    flex: 0.25,
    padding: 5,
    paddingLeft: 20
  },
  news: {
    fontFamily: "BrandonText-Bold",
    fontSize: 20
  },
  newsSlider: {
    marginTop: 5
  }
});

const mapStatesToProps = (state: any) => {
  const { stocks } = state;
  return {
    ...stocks
  };
};

const mapDispatchToProps = ({
  stocks: { fetchStocks, fetchSocialMedia, updateStocks }
}: any) => ({
  fetchStocks: () => fetchStocks(),
  fetchSocialMedia: () => fetchSocialMedia(),
  updateStocks: (stocks: any) => updateStocks(stocks)
});
export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(Home);
