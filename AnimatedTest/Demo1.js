import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Easing,
} from 'react-native';

export class Demo1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeAnimation: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnimation,
      {
        toValue: 1.0,
        duration: 3000,
      }
    ).start();
  }

  render() {
    return (
      <Animated.View style={[styles.container, {opacity: this.state.fadeAnimation}]}>
        <Text>Hello, I did fadeIn!</Text>
      </Animated.View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5babb8',
  }
});
