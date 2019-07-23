import { Navigation } from "react-native-navigation";
import registerScreens from "./registerScreens";

// Register all screens on launch
registerScreens();

const navigator = () => {
  Navigation.setRoot({
    root: {
      stack: {
        options: {
          topBar: {
            visible: false
          },
          statusBar: {
            style: "light"
          }
        },
        children: [
          {
            component: {
              name: "navigation.smr.Stocks"
            }
          }
        ]
      }
    }
  });
};

export default navigator;

/**
 {
            component: {
              name: "navigation.smr.Details",
              options: {
                statusBar: {
                  visible: false,
                  style: "light"
                }
              }
            }
          }
 */
