//
// 参考文章：http://www.cnblogs.com/vajoy/p/5299315.html
//

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  LayoutAnimation,
  Text,
  View
} from 'react-native';

class LayoutAnimationTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 200,
      height: 20,
    };
  }

  onPress() {
    LayoutAnimation.configureNext({
      duration: 700,
      create: {
        type: 'linear',
        property: 'opacity',
      },
      update: {
        type: 'spring',
        springDamping: 0.4,
      }
    });
    this.setState({
      width: this.state.width + 30,
      height: this.state.height + 30,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => {this.onPress();}}>
          <Text style={{
            backgroundColor: 'yellow',
            width: this.state.width,
            height: this.state.height,
          }}>
            Click Me! Animation!
          </Text>
        </TouchableHighlight>
        <Text style={styles.welcome}>
          Welcome to React Native!
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

AppRegistry.registerComponent('LayoutAnimationTest', () => LayoutAnimationTest);
