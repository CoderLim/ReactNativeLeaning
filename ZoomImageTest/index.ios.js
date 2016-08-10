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
  Image,
  Dimensions,
  PanResponder,
} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

class ZoomImageTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: WINDOW_WIDTH,
      height: WINDOW_HEIGHT,
      scale: 1,
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        console.log('grant');
      },
      onPanResponderMove: (evt, gestureState) => {
        // 两个手指
        if (gestureState.numberActiveTouches == 2) {
          let touches = evt.nativeEvent.touches;
          this.setState({
            scale: 1+(touches[0].locationX-touches[1].locationX)/100,
          });
        }

      },
      onPanResponderRelease: (evt, gestureState) => {
      },
      onPanResponderTerminate: (evt, gestureState) => {
      },
    });
  }

  render() {
    return (
      <ScrollView style={styles.container} >
        <View {...this.panResponder.panHandlers}>
          <Image
            {...this.panResponder}
            onLoad={this._onLoad.bind(this)}
            source={{uri:'http://ww1.sinaimg.cn/mw690/006bjwLdgw1f6mhp5ciqlj30a68c81kx.jpg'}}
            style={{
              width: this.state.width,
              height: this.state.height,
              transform: [{
                scale: this.state.scale,
              }]
            }}
            />
        </View>

      </ScrollView>
    );
  }

  _onLoad() {
    Image.getSize('http://ww1.sinaimg.cn/mw690/006bjwLdgw1f6mhp5ciqlj30a68c81kx.jpg',
      (width, height) => {
      this.setState({width, height});
    });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('ZoomImageTest', () => ZoomImageTest);
