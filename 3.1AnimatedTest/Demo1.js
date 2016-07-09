import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Easing,
} from 'react-native';

//
// 这个default不能丢！不然就会提示“Element type is invalid: ....Check the render method of 'Navigator' ”
//
// export default 与 export的区别：http://www.csdn.net/article/2015-04-30/2824595-Modules-in-ES6
//
export default class Demo1 extends Component {
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
        <Text>左划可以返回</Text>
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
