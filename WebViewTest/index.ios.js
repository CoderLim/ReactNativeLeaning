/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  WebView,
  Text,
  View
} from 'react-native';

class WebViewTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          style={{
            backgroundColor: 'green',
            // height: 300,
          }}
          source={{uri: 'http://www.baidu.com'}}
          scalePageToFit={true}
          >
        </WebView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch', // 这里要改成stretch，否则webView没有大小哦！
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('WebViewTest', () => WebViewTest);
