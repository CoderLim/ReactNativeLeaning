import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Easing,
} from 'react-native';

export default class Demo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: new Animated.Value(0),
      rotation: new Animated.Value(0),
      fontSize: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.parallel(['fadeIn', 'rotation', 'fontSize'].map(property => {
      return Animated.timing(this.state[property],
        {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
      });
    })).start();
  }

  render() {
    return (
      <Animated.View style={[styles.demo, {
        opacity: this.state.fadeInOpacity,
        transform: [{
          rotateZ: this.state.rotation.interpolate({
            inputRange: [0,1],
            outputRange: ['0deg', '360deg']
          })
        },]
      }]}>
        <Animated.Text style={{
          fontSize: this.state.fontSize.interpolate({
            inputRange: [0, 1],
            outputRange: [12, 26]
          })
        }}>
          大家好，我是动画parallel
        </Animated.Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  demo: {
    flex: 1,
    justifyContent: 'center',
  }
});
