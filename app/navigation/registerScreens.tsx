import * as React from "react";
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import _ from "lodash";
import Screens from "@screens/index";
import models from "@screens/models";
import createStore from "./store";

/**
 * Configure store
 */
const store = createStore(models);

/**
 * Wrap component with rematch store.
 */

const WrappedComponent = (Component: typeof React.Component) => () => (
  props: any
) => (
  <Provider store={store}>
    <Component {...props} />
  </Provider>
);

export default () => {
  /**
   * Register each screen with rematch wrapper
   */
  _.forEach(Screens, (v: any, k: string) => {
    Navigation.registerComponent(`navigation.smr.${k}`, WrappedComponent(v));
  });
};
