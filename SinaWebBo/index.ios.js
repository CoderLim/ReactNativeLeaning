/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  AsyncStorage,
  Image,
  TabBarIOS,
  Text,
  View
} from 'react-native';

import Const from './Other/Const';
import AuthPage from './AuthPage';
import TabBarPage from './TabBarPage';

class SinaWebBo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageIndex: 1,
    };

    // 检查是否已经有token
    AsyncStorage.getItem(Const.ACCESSTOKEN_KEY)
     .then((value) => {
         this.setState({
           pageIndex: !value ? 0 : 1,
         });
     })
     .catch((error) => {
     })
     .done();

  }
  render() {
    if (this.state.pageIndex === 0) {
      return (
        // 授权页面
        <AuthPage
          authSuccessCallback={() => {
            this.setState({
              pageIndex: 1,
            });
          }}
        />
      );
    }
    return (
      // <Image source={ require('./images/TabBar/didian.png')} />
      <TabBarPage />
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

AppRegistry.registerComponent('SinaWebBo', () => SinaWebBo);
