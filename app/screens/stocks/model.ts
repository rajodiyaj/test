import Faker from "faker";

export default {
  state: {
    shallowSymbols: [],
    symbols: [],
    social: [],
    isFetchingStocks: false,
    isFetchingSocialMedia: false
  },
  reducers: {
    update: (state: any, payload: any) => {
      return { ...state, ...payload };
    }
  },
  effects: (dispatch: any) => ({
    fetchStocks(payload: any, rootState: any) {
      dispatch.stocks.update({ isFetchingStocks: true });
      fetch(
        "https://financialmodelingprep.com/api/stock/list/all?datatype=json"
      )
        .then(response => response.json())
        .then(
          response => {
            dispatch.stocks.update({
              isFetchingStocks: false,
              symbols: response,
              shallowSymbols: response
            });
          },
          e => {}
        );
    },
    fetchSocialMedia(payload: any, rootState: any) {
      let media = [],
        social = ["facebook", "twitter"];
      for (let i = 0; i < 5; i++) {
        media.push({
          title: Faker.lorem.sentence(),
          social: social[i % 2]
        });
      }
      dispatch.stocks.update({
        social: media
      });
    },
    updateStocks(payload: any, rootState: any) {
      dispatch.stocks.update({
        shallowSymbols: payload
      });
    }
  })
};
