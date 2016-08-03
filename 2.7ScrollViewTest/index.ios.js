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
  View,
  ScrollView,
  Dimensions,
} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

class ScrollViewTest extends Component {
  render() {
    return (
      <ScrollView pagingEnabled={true} horizontal={true}>
        <View style={[styles.subView, {backgroundColor:'green'}]}>
          <Text>1111111111</Text>
        </View>
        <View style={[styles.subView, {backgroundColor:'yellow'}]}>
          <Text>2222222222</Text>
        </View>
        <View style={[styles.subView, {backgroundColor:'purple'}]}>
          <Text>3333333333</Text>
        </View>
      </ScrollView>
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
  subView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: WINDOW_WIDTH,
  }
});

AppRegistry.registerComponent('ScrollViewTest', () => ScrollViewTest);
