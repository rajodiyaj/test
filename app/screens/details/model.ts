import _ from "lodash";
const key = "2G61QUD2JUHD1KH9";
import applyAlgo from "@lib/algorithm";

export default {
  state: {
    isFetchingStocks: false,
    currentRange: "10D",
    data: [],
    graph: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    shallowData: []
  },
  reducers: {
    update: (state: any, payloads: any) => {
      return { ...state, ...payloads };
    }
  },
  effects: (dispatch: any) => ({
    fetchStockHistory(payload: string = "AAPL", rootState: any) {
      dispatch.details.update({ isFetchingStocks: true });
      fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${payload}&apikey=${key}`
      )
        .then(response => response.json())
        .then(
          response => {
            let data = response["Time Series (Daily)"];

            let graph = [],
              shallowData = [],
              i = 0;
            data = _.map(data, (v: any, k: string) => {
              const open = parseFloat(v["1. open"]).toFixed(2);
              const high = parseFloat(v["2. high"]).toFixed(2);
              const low = parseFloat(v["3. low"]).toFixed(2);
              const close = parseFloat(v["4. close"]).toFixed(2);
              const volume = v["5. volume"];

              const recom = applyAlgo(high, low, close);
              const d = { open, high, low, close, volume, date: k, status: recom };
              if (i < 10) {
                graph.push(parseFloat(close).toFixed(2));
                shallowData.push(d);
                i++;
              }
              return d;
            });

            dispatch.details.update({
              data: data,
              graph: graph,
              shallowData: shallowData,
              isFetchingStocks: false,
              currentRange: "10D"
            });
          },
          e => {
            console.log("ERROR :=> ", e);
          }
        );
    },
    updateRange(payload: any, rootState: any) {
      let range = payload.replace("D", "");
      const {
        details: { data = [] }
      } = rootState;
      let shallowData = [],
        graph = [];
      if (range == "MAX") {
        shallowData = data;
        graph = _.map(data, (v, k) => v.close);
      } else {
        range = parseInt(range);
        for (let i = 0; i < range; i++) {
          shallowData.push({ ...data[i] });
          graph.push(data[i].close);
        }
      }

      dispatch.details.update({
        graph: graph,
        shallowData: shallowData,
        currentRange: payload
      });
    }
  })
};
