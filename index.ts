import { Navigation } from "react-native-navigation";
import Navigator from "./app/navigation";
Navigation.events().registerAppLaunchedListener(() => Navigator());