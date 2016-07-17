import React, { Component } from 'react';
import {
  Navigator,
  View,
  Alert,
  Text,
  StyleSheet,
  ListView,
  AsyncStorage,
} from 'react-native';

import Const from '../Other/Const';

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  // 获取微博
  getStatuses() {
    AsyncStorage.getItem(Const.ACCESSTOKEN_KEY)
      .then((token) => {
        let params = '?since_id=0' +
                     '&max_id=' + 0 +
                     '&count=' + 20 +
                     '&access_token=' + token;
        fetch('https://api.weibo.com/2/statuses/home_timeline.json'+params,
          {
              method: 'GET',
          })
          .then((response) => response.json())
          .then((responseData) => {
            console.log(responseData.statuses[0]);
            this.state.dataSource.cloneWithRows(responseData.statuses);
          })
          .done();
      })
      .done();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is home page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
