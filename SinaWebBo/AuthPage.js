import React, { Component } from 'react';
import {
  WebView,
  View,
  StyleSheet,
  Alert,
  AsyncStorage,
} from 'react-native';

import Const from './Const';

export default class AuthPage  extends Component {
  constructor(props) {
    super(props);
  }

  _onShouldStartLoadWithRequest(webView) {
    let url = webView.url;
    if (url.indexOf('code=') > 0) {
      let code = /code=([^&]+)/.exec(url)[1]
      this.getAccessToken(code);
      return false;
    }
    return true;
  }

  getAccessToken(code: string) {
    let param =
      '?client_id='+ Const.AppKey +
      '&client_secret=' + Const.AppSecret +
      '&grant_type=authorization_code' +
      '&code=' + code +
      '&redirect_uri=' + Const.RedirectURI;

    fetch('https://api.weibo.com/oauth2/access_token'+param,
      {
        method: 'POST',
      })
      .then((response) => {
        let json = response.json();
        // 为什么这里是Promise对象？
        // console.log(json);
        return json;
      })
      .catch((error) => {
        Alert.alert('error', error);
      })
      .then((responseData) => {
        // 将token缓存起来
        AsyncStorage.setItem(Const.ACCESSTOKEN_KEY, responseData.access_token)
          .then(() => {
            this.props.authSuccessCallback();
          })
          .catch((error) => {
          })
          .done();
        console.log(responseData);
      })
      .done();
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{uri: Const.LoginURL}}
          javaScriptEnabled={true}
          onShouldStartLoadWithRequest={this._onShouldStartLoadWithRequest.bind(this)}
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
  },
})
