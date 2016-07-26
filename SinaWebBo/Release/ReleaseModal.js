/*
 *
 *
 *    监听键盘弹出参考：http://kpetrovi.ch/2015/09/30/react-native-ios-keyboard-events.html
 *
 *    但是会有警告：keyboardWillShow event should be registered via the keyboard module
 *
 *    所以更改如下，用Keyboard代替DeviceEventEmitter注册键盘监听
 *
 */

import React, { Component } from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableHighlight,
  Text,
  TextInput,
  Image,
  Dimensions,
  Keyboard,
  Animated,
  AsyncStorage,
  Alert,
} from 'react-native';
import Const from '../Other/Const';

const WinWidth = Dimensions.get('window').width;

export default class ReleaseModal extends Component {
  static propTypes = {
    ...Modal.propTypes,
  };

  constructor(props) {
    super(props);

    this.state = {
      status: '',
      bottomViewMarginBottom: new Animated.Value(0),
    };
  }

  componentDidMount() {
    _keyboardWillShowSubscription = Keyboard.addListener('keyboardWillShow',
                                    (e) => this._keyboardWillShow(e));
    _keyboardWillHideSubscription = Keyboard.addListener('keyboardWillHide',
                                    (e) => this._keyboardWillHide(e));
  }

  componentWillUnmout() {
    _keyboardWillShowSubscription.remove();
    _keyboardWillHideSubscription.remove();
  }

  sendStatusWithoutImage() {
    let text = this.state.status;
    if (!text) {
      Alert.alert('提示', '请输入微博');
    }

    /*
     *
     *  注意了，下面请求时要加上content-Type，
     *  不然提示“缺少必需参数status”，简直坑的一13
     *
     */
    AsyncStorage.getItem(Const.ACCESSTOKEN_KEY)
      .then((token) => {
        if (token) {
          let params = `status=${encodeURIComponent(text)}&access_token=${token}`,
              url = `https://api.weibo.com/2/statuses/update.json?${params}`;
          console.log(url);
          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
          })
          .then((response) => response.json())
          .catch((error) => Alert.alert('error', error))
          .then((responseData) => {
            if (responseData.error) {
              Alert.alert('error', responseData.error);
            }
            Alert.alert('^_^', '发表成功');
          })
          .done();
        }
      })
      .done();
  }

  _keyboardWillShow(e) {
    // 可以试试弹簧效果：spring
    Animated.timing(this.state.bottomViewMarginBottom, {
      toValue: e.endCoordinates.height,
    }).start();
  }

  _keyboardWillHide(e) {
    Animated.timing(this.state.bottomViewMarginBottom, {
      toValue: 0,
    }).start();;
  }

  render() {
    return (
      <Modal {...this.props} >
        <View style={styles.container}>
          <View style={[styles.barBaseTheme, styles.navigationBar]}>
            <TouchableHighlight onPress={() => {this.props.onRequestClose();}}>
              <Text style={styles.navigationItem}>取消</Text>
            </TouchableHighlight>
            <Text  style={styles.navigationTitle}>发微博</Text>
            <TouchableHighlight onPress={this.sendStatusWithoutImage.bind(this)}>
              <Text style={styles.navigationItem}>发送</Text>
            </TouchableHighlight>
          </View>
          <TextInput
            style={styles.inputView}
            multiline={true}
            placeholder="分享新鲜事..."
            onChangeText={(text) => {
              this.setState({
                status: text,
              });
            }}
            />
          <Animated.View style={[styles.barBaseTheme, styles.bottomView, {
              marginBottom: this.state.bottomViewMarginBottom,
          }]}>
              <TouchableHighlight onPress={() => {this.props.onRequestClose();}}>
                <Image source={require("../images/Compose/compose_camerabutton_background.png")} />
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {this.props.onRequestClose();}}>
                <Image source={require("../images/Compose/compose_toolbar_picture.png")} />
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {this.props.onRequestClose();}}>
                <Image source={require("../images/Compose/compose_mentionbutton_background.png")} />
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {this.props.onRequestClose();}}>
                <Image source={require("../images/Compose/compose_trendbutton_background.png")} />
              </TouchableHighlight>
              <TouchableHighlight onPress={() => {this.props.onRequestClose();}}>
                <Image source={require("../images/Compose/compose_emoticonbutton_background.png")} />
              </TouchableHighlight>
          </Animated.View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(248,248,248)',
  },
  barBaseTheme: {
    width: WinWidth,
    flexDirection: 'row',
    backgroundColor: 'rgb(248,248,248)',
    alignItems: 'center',
  },
  navigationBar: {
    marginTop: 20,
    height: 44,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  navigationItem: {
    fontSize: 17,
    marginHorizontal: 10,
    color: 'orange',
  },
  navigationTitle: {
    fontSize: 20,
  },
  inputView: {
    flex: 1
  },
  bottomView: {
    height: 46,
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
});
