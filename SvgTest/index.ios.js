/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
 *   特地整个大的注释来吐槽，创建svg项目，安装 dependencies， 但是一直报错，各种版本不对应
 *
 *   参考的是：http://reactnative.cn/post/306，后来才知道问题出来 包名，因为react-native-art-svg，
 *
 *   已经更名为react-native-svg，而上面的博客没更新
 *
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Animated,
} from 'react-native';
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

class SvgTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animator: new Animated.Value(0),
      radius: 100,
    };
  }

  componentWillMount() {
    Animated.timing(this.state.animator, {
      duration: 5000,
      toValue: 1000,
    }).start();

    requestAnimationFrame(() => {
      this.setState({
        radius: this.state.radius + 200,
      });
    });
  }

  render() {
    let AnimScrollView = Animated.createAnimatedComponent(ScrollView);
    let AnimSvg = Animated.createAnimatedComponent(Svg);
    let AnimCircle = Animated.createAnimatedComponent(Circle);
    console.log(this.state.animator._value + "");
    return (
      <ScrollView style={styles.container}>
        <Svg
          height="100"
          width="100">
            <Circle
              cx="50"
              cy="50"
              r={40}
              stroke="blue"
              strokeWidth="2.5"
              fill="green"/>
            <Rect
              x="0"
              y="0"
              width="100"
              height="100"
              stroke="green"
              fill="none"/>
          </Svg>
          <Svg
            width="200"
            height="60">
            <Rect
              x="25"
              y="5"
              width="150"
              height="50"
              fill="rgb(0,0,255)"
              strokeWidth="3"
              stroke="rgb(0,0,0)"/>
          </Svg>
          <Svg
           width="100"
           height="100">
           <Circle
            cx="50"
            cy="50"
            r="50"
            fill="pink"/>
          </Svg>
          <Svg
            width="110"
            height="100">
            <Ellipse
              cx="55"
              cy="55"
              rx="50"
              ry="30"
              stroke="purple"
              strokeWidth="2"
              fill="yellow"/>
          </Svg>
          <Svg
            height="100"
            width="100">
            <Polygon
              points="40,5 70,80 25,95"
              fill="lime"
              stroke="purple"
              strokeWidth="1"/>
          </Svg>
          <Svg
            height="100"
            width="100">
            <Path
              d="M25 10 L98 65 L70 25 L16 77 L11 30"
              fill="none"
              stroke="red"/>
          </Svg>
          <Svg
            height="60"
            width="200">
            <Text
              fill="none"
              stroke="purple"
              fontSize="20"
              fontWeight="bold"
              x="100"
              y="20"
              textAnchor="middle">
              耿笠茗
            </Text>
          </Svg>
          <Svg
            height="100"
            width="200">
            <G
              rotate="50"
              origin="100, 50">
              <Line
                x1="60"
                y1="10"
                x2="140"
                y2="10"
                stroke="#060"/>
              <Rect
                x="60"
                y="20"
                height="50"
                width="80"
                stroke="#060"
                fill="#060"/>
              <Text
                x="100"
                y="75"
                stroke="#600"
                fill="#600"
                textAnchor="middle">
                Text grouped with shapes
              </Text>
            </G>
          </Svg>
          <Svg
            height="100"
            width="300">
            <Defs>
              <G id="shape">
                <Circle cx="50" cy="50" r="50"/>
                <Rect x="50" y="50" width="50" height="50"/>
                <Circle cx="50" cy="50" r="5" fill="blue"/>
              </G>
            </Defs>
            <Use href="#shape" x="20" y="0"/>
            <Use href="#shape" x="170" y="0" />
          </Svg>
          <Svg
            height="150"
            width="110">
            <Symbol id="symbol" viewBox="0 0 150 110" width="100" height="50">
              <Circle cx="50" cy="50" r="40" strokeWidth="8" stroke="red" fill="red" />
              <Circle cx="90" cy="60" r="40" strokeWidth="8" stroke="green" fill="white" />
            </Symbol>

            <Use href="#symbol" x="0" y="0"/>
            <Use href="#symbol" x="0" y="110" width="75" height="38"/>
            <Use href="#symbol" x="0" y="140" width="50" height="25" />
          </Svg>

          <Svg
            height="150"
            width="300">
            <Defs>
              <LinearGradient id="grad" x1="0" y1="0" x2="170" y2="0">
                <Stop offset="0" stopColor="rgb(255,255,0)" stopOpacity="0" />
                <Stop offset="1" stopColor="red" stopOpacity="1" />
              </LinearGradient>
            </Defs>
            <Ellipse cx="150" cy="75" rx="85" ry="55" fill="url(#grad)" />
          </Svg>
          <Svg
            height="150"
            width="300">
            <Defs>
              <RadialGradient id="grad" cx="150" cy="75" rx="85" ry="55" fx="150" fy="75">
                <Stop offset="0" stopColor="#ff0" stopOpacity="1" />
                <Stop offset="1" stopColor="#83a" stopOpacity="1" />
              </RadialGradient>
            </Defs>
            <Ellipse cx="150" cy="75" rx="85" ry="55" fill="url(#grad)" />
          </Svg>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('SvgTest', () => SvgTest);
