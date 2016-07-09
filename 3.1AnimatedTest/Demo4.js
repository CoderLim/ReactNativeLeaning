import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
} from 'react-native';

export default class Demo4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bounce: new Animated.Value(0),
      opacity: new Animated.Value(0),
    };
  }

  componentDidMount() {


    Animated.sequence([
      Animated.stagger(1000, [
        // spring动画
        Animated.spring(this.state.bounce, {
          toValue: 0.8,
          friction: 1, // 摩擦系数，数值越小弹簧效果越明显，默认是7
          tension: 30, // 动画速度，默认是40
        }),
        Animated.timing(this.state.opacity, {
          toValue: 1,
        }),
      ]),
    ]).start();
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'purple'}}>
        <Text style={styles.tip}>
          以下是福利图，图片有点大可能显示不出来，多执行几次就能看见了^_^
        </Text>
        <Animated.Image
          source={{uri: 'http://e.hiphotos.baidu.com/zhidao/pic/item/4610b912c8fcc3ce57ebc8369045d688d43f208f.jpg'}}
          style={{
            flex: 1,
            margin: 10,
            backgroundColor: 'black',
            transform: [
              {scale: this.state.bounce},
            ]
          }}
        />
        <Animated.Text style={[styles.text, {
          opacity: this.state.opacity,
        }]}>
          敲代码累了放松一下
        </Animated.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tip: {
    color: 'white',
    textAlign: 'center',
    marginTop: 40,
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    height: 40,
    marginBottom: 20
  }
});
