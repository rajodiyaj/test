import * as React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { AreaChart } from "react-native-svg-charts";

interface Props {
  height?: number;
  fill?: string;
  stroke?: string;
  data: any;
}

interface State {}

class Chart extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
  }

  render() {
    let { height = 200, fill = "", stroke = "", data } = this.props;
    data = data.map((v: any) => parseFloat(v));
    return (
      <AreaChart
        animate={true}
        style={{ height: height }}
        data={data}
        start={0}
        svg={{ stroke: stroke, fill: fill, strokeWidth: 2 }}
        contentInset={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />
    );
  }
}

export default connect()(Chart);
