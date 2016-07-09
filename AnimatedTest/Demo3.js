import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Navigator,
} from 'react-native';

export default class Demo3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animations: [1,2,3].map(() => new Animated.Value(0)),
    };
  }

  componentDidMount() {
    Animated.sequence([
      Animated.stagger(200, this.state.animations.map(left => {
        return Animated.timing(
          left, { toValue: 1 ,}
        );
      }).concat(
        this.state.animations.map(left => {
          return Animated.timing(
            left, { toValue: 0, }
          );
        })
      )),
    ]).start();
  }

  render() {
    let views = this.state.animations.map((value, index) => {
      return (
        <Animated.View
          key={index}
          style={[styles.demo, styles['demo'+index], {
            left: value.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 200]
            })
          }]}>
          <Text style={styles.text}>
            我是第{index}个View
          </Text>
        </Animated.View>
      );
    });
    return (
      <View style={styles.container}>
        <Text>复杂动画</Text>
        {views}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  demo: {
    borderWidth: 1,
    marginTop: 5,
  },
  demo1: {
    borderColor: 'pink',
  },
  demo2: {
    borderColor: '#5e5e5e',
  },
  demo3: {
    borderColor: '#4A3B3B',
  },
  text: {
    height: 44,
    textAlign: 'center',
  }
});
