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
      // 我的老家地址
      latitude: 39.2088993882,
      longitude: 115.6456824339,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1
    };
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          pitchEnabled={false}
          region={region}
          onRegionChange={this._onRegionChange.bind(this)}
          />
      </View>
    );
  }

  _onRegionChange(region) {
    console.log(region);
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
