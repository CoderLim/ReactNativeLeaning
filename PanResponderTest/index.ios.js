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
  }

  componentWillMount() {
    console.log('componentWillMount');
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder.bind(this),
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder.bind(this),
      onPanResponderGrant: this._handlePanResponderGrant.bind(this),
      onPanResponderMove: this._handlePanResponderMove.bind(this),
      onPanResponderRelease: this._handlePanResponderEnd.bind(this),
      onPanResponderTerminate: this._handlePanResponderTerminate.bind(this),
    });
    console.log(this._panResponder);
  }

  _handleStartShouldSetPanResponder() {
    console.log('startShouldSetPanResponder');
    return true;
  }
  _handleMoveShouldSetPanResponder() {
    console.log('moveShouldSetPanResponder');
    return true;
  }
  _handlePanResponderGrant() {
    console.log('grant');
  }
  _handlePanResponderMove() {
    console.log('move');
  }
  _handlePanResponderEnd() {
    console.log('end');
  }
  _handlePanResponderTerminate() {
    console.log('terminate');
  }

  render() {
    return (
      <View style={styles.container}
        {...this._panResponder.panHandler}
      >
        <Text style={styles.welcome}>
          Welcome to React Native!1342
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
