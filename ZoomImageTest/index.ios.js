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
    this._pinchDx = 0;
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
        if (gestureState.numberActiveTouches == 2) {
          let touches = evt.nativeEvent.touches;
          this._pinchDx = Math.abs(touches[0].locationX-touches[1].locationX);
        }
      },
      onPanResponderMove: (evt, gestureState) => {
        // pinch
        if (gestureState.numberActiveTouches == 2) {
          let touches = evt.nativeEvent.touches;
          console.log(touches[0]);
          this.setState({
            scale: 0.5+Math.abs(touches[0].locationX-touches[1].locationX)/this._pinchDx,
          });
        // drag
        } else if (gestureState.numberActiveTouches == 1) {

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
      <ScrollView style={styles.container}
        directionalLockEnabled={false}
        horizontal={false}
        contentContainerStyle={{
          width: this.state.width,
          height: this.state.height,
        }}>
          <Image
            {...this.panResponder.panHandlers}
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
