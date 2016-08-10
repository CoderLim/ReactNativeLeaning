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
  Image,
} from 'react-native';

class TransformTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            backgroundColor: 'red',
            width: 440,
            height: 300,
          }}
          resizeMode='contain'
          source={{uri: 'http://d.hiphotos.baidu.com/zhidao/pic/item/0df3d7ca7bcb0a4609b3f9c16a63f6246a60afb1.jpg'}}
          >
        </Image>
        <Image
          style={{
            width: 200,
            height: 300,
            transform: [
              {scale: 2}
            ],
          }}
          resizeMode='contain'
          source={{uri: 'http://d.hiphotos.baidu.com/zhidao/pic/item/0df3d7ca7bcb0a4609b3f9c16a63f6246a60afb1.jpg'}}
          >
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('TransformTest', () => TransformTest);
