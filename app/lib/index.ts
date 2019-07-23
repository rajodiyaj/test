import { StyleSheet, Dimensions, Platform } from "react-native";

const IS_IOS = Platform.OS === "ios";
const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

function wp(percentage: number) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

export const slideHeight = viewportHeight * 0.36;
export const slideWidth = wp(85);
export const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export const getHex = (media: string) => {
  switch (media) {
    case "facebook":
      return "#3b5998";
    case "twitter":
      return "#1da1f2";
    case "youtube":
      return "#ff0000";
    case "instagram":
      return "#c32aa3";
    default:
      return "#3d3d3d";
  }
};
