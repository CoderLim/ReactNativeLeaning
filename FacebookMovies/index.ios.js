/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  Alert,
  View
} from 'react-native';

import SearchScreen from './SearchScreen';

class FacebookMovies extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
          name: 'Movies',
          component: SearchScreen,
        }}
        configureScene={ (route) => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems: 'flex-end',
    backgroundColor: '#F5Fccc',
  }
});

AppRegistry.registerComponent('FacebookMovies', () => FacebookMovies);
