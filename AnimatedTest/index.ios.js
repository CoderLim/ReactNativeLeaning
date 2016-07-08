/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

import AnimatedList from './AnimatedList';

class AnimatedTest extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{
          name: 'AnimatedList',
          component: AnimatedList,
        }}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.PushFromRight}
        renderScene={(route, navigator) => {
          // the left variable is a type not a variable name
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}
      />);
  }
}

AppRegistry.registerComponent('AnimatedTest', () => AnimatedTest);
