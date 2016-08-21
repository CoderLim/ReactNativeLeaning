/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MapView from './MapView';

class NativeUIComponents extends Component {
  render() {
    var region = {
      latitude: 39.26,
      longitude: 115.25,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1
    };
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          pitchEnabled={false}
          region={region}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
    backgroundColor: 'red',
  }
});

AppRegistry.registerComponent('NativeUIComponents', () => NativeUIComponents);
