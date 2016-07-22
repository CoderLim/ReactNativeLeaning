import React, { Component } from 'react';
import {
  WebView,
  View,
  StyleSheet,
  Alert,
  AsyncStorage,
  Text,
} from 'react-native';

import Const from './Other/Const';

export default class AuthPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      didAuthorize: false,
    };
  }

  onShouldStartLoadWithRequest(webView) {
    let url = webView.url;
    if (url.indexOf('code=') > 0) {
      this.setState({
        didAuthorize: true,
      });
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

  /*
    绑定：this.onShouldStartLoadWithRequest.bind(this)
    还不支持ES7的 ::this.onShouldStartLoadWithRequest 这种写法
  */
  render() {
    let child = this.state.didAuthorize ?
                <Text style={{alignSelf: 'center'}}>认证通过，正在请求token</Text> :
                (<WebView
                    style={styles.webView}
                    source={{uri: Const.LoginURL}}
                    javaScriptEnabled={true}
                    startInLoadingState={true}
                    onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest.bind(this)}
                  >
                  </WebView>);
    return (
      <View style={styles.container}>
        {child}
      </View>
    );
  }
}

{/* container不能设置alignItem：‘center’，否则webView看不到 */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  webView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webViewLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
