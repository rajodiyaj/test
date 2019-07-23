import * as React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import { t } from "@i18n/index";
import _ from "lodash";
import Button from "@components/Button";

interface Props {
  data?: any;
}

interface State {}

class Table extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
  }

  renderHeader = ({ item }: any) => {
    return (
      <View style={[styles.rowContainer, styles.headerContainer]}>
        <View>
          <Text style={[styles.text, styles.tableHeader]}>{t("DATE")}</Text>
        </View>
        <View>
          <Text style={[styles.text, styles.tableHeader]}>{t("CLOSE")}</Text>
        </View>
        <View>
          <Text style={[styles.text, styles.tableHeader]}>
            {t("SUGGESTION")}
          </Text>
        </View>
      </View>
    );
  };
  renderItem = ({ item }: any) => {
    return (
      <View style={styles.rowContainer}>
        <View>
          <Text style={styles.text}>{item.date}</Text>
        </View>
        <View>
          <Text style={styles.text}>${item.close}</Text>
        </View>
        <View>
          <Button status={item.status} />
        </View>
      </View>
    );
  };

  render() {
    const {
      data,
      headerTitle = [t("DATE"), t("CLOSE"), t("SUGGESTION")]
    } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          renderItem={this.renderItem}
          data={data}
          ListHeaderComponent={this.renderHeader}
          keyExtractor={(item: any, index: number) => item.date}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    padding: 20
  },
  text: {
    fontFamily: "BrandonText-Medium",
    fontSize: 14,
    color: "#3d3d3d"
  },
  rowContainer: {
    backgroundColor: "#FFF",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#C8C8C8",
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  white: {
    color: "#FFF"
  },
  headerContainer: {
    // backgroundColor: "#0362CF"
  },
  tableHeader: {
    fontFamily: "BrandonText-Bold",
    fontSize: 16
  }
});

export default connect()(Table);
