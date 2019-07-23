import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { t } from "@i18n/index";
import {
  slideHeight,
  itemWidth,
  itemHorizontalMargin,
  getHex
} from "@lib/index";
import Icon from "react-native-vector-icons/FontAwesome";

interface Props {
  data: any;
  sliderWidth?: number;
  itemWidth?: number;
}

interface State {
  sliderActiveSlide: number;
}

export default class News extends React.PureComponent<Props, State> {
  _carousel: any;
  constructor(props: any) {
    super(props);
    this.state = {
      sliderActiveSlide: 0
    };
  }

  _renderItem({ item, index }: any) {
    return (
      <View style={styles.slide}>
        <View style={styles.container}>
          <Icon name={item.social} size={18} color={getHex(item.social)} />
          <Text style={styles.title} ellipsizeMode={"tail"} numberOfLines={1}>
            {item.title}
          </Text>
        </View>
      </View>
    );
  }

  render() {
    const { data, sliderWidth, itemWidth } = this.props;
    const { sliderActiveSlide } = this.state;
    return (
      <View>
        <Carousel
          ref={(c: any) => {
            this._carousel = c;
          }}
          loop={true}
          loopClonesPerSide={2}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}
          data={data}
          firstItem={0}
          activeSlideAlignment={"start"}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          inactiveSlideScale={0.95}
          inactiveSlideOpacity={0.7}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          onSnapToItem={index => this.setState({ sliderActiveSlide: index })}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={sliderActiveSlide}
          containerStyle={styles.paginationContainer}
          dotColor={"rgba(255, 255, 255, 0.92)"}
          dotStyle={styles.paginationDot}
          inactiveDotColor={"#1a1917"}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={this._carousel}
          tappableDots={!!this._carousel}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    width: itemWidth,
    // height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
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
  container: {
    padding: 10,
    flexDirection: "row"
  },
  title: {
    paddingLeft: 10,
    fontFamily: "BrandonText-Medium",
    fontSize: 15
  },
  slider: {
    marginTop: 0,
    overflow: "visible" // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 1 // for custom animation
  },
  paginationContainer: {
    paddingVertical: 8
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8
  }
});
