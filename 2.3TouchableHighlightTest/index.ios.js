/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableHighlight,
  Image,
  StyleSheet,
  Alert,
  Text,
  View
} from 'react-native';

class TouchableHighlightTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={()=>Alert.alert('This is title', 'You clicked me!')}>
          <Image
            source={require('./1.png')}
          />
        </TouchableHighlight>
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
});

AppRegistry.registerComponent('TouchableHighlightTest', () => TouchableHighlightTest);
