/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  PanResponder,
  StyleSheet,
  Text,
  View
} from 'react-native';

class PanGestureTest extends Component {

  constructor(props) {
    super(props);
    this._panResponder = {};
    this.state = {
      panStateText: 'nothing',
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
    this._panResponder = PanResponder.create({
      // 要求成为响应者
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      // 开始手势操作
      onPanResponderGrant: this._handlePanResponderGrant.bind(this),
      onPanResponderMove: this._handlePanResponderMove.bind(this),
      // 用户放开了所有触摸点
      onPanResponderRelease: this._handlePanResponderEnd.bind(this),
      // 另一个组件成为了新的响应者，所以当前手势将被取消
      onPanResponderTerminate: this._handlePanResponderTerminate.bind(this),
    });
    console.log(this._panResponder);
  }s
  _handlePanResponderGrant() {
    this.setState({
      panStateText: 'grant',
    });
  }
  _handlePanResponderMove() {
    this.setState({
      panStateText: 'move',
    });
  }
  _handlePanResponderEnd() {
    this.setState({
      panStateText: 'end',
    });
  }
  _handlePanResponderTerminate() {
    this.setState({
      panStateText: 'terminate',
    });
  }

  render() {
    return (
      // 注意这里的panHandler是负数，写成单数是不会报错的哦！卖个萌
      <View style={styles.container} {...this._panResponder.panHandlers}>
        <Text style={styles.welcome}>
          {this.state.panStateText}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PanGestureTest', () => PanGestureTest);
