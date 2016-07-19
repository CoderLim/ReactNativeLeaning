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
import StatusCell from './StatusCell';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  componentDidMount() {
    this.getStatuses();
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
          .catch((error) => Alert.alert('error', error))
          .then((responseData) => {
            console.log(responseData.statuses[0]);
            // 切记是这样写
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(responseData.statuses)
            })
            // ，而不是,我说怎么没数据
            // this.state.dataSource.cloneWithRows(responseData.statuses);
          })
          .done();
      })
      .catch((error) => Alert.alert('error', error))
      .done();
  }

  _renderRow(status: Object,
             sectionID: number|string,
             rowID: number|string,
             highlightRowFunc: (sectionID: ?number|string, rowID: ?number|string) => void) {
    return (
      <StatusCell status={status}/>
    );
  }

  _renderSeparator(sectionID: number|string,
                   rowID: number|string,
                   adjacentRowHighlighted: boolean) {
    let style = styles.rowSeparator;
    if (adjacentRowHighlighted) {
      style = [style, styles.rowSeparator];
    }
    return (
      <View key={'sep_' + sectionID + '_' + rowID} style={style} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          ref="listview"
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          renderSeparator={this._renderSeparator.bind(this)}
          automaticallyAdjustContentInsets={true}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps={true}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    marginTop: 66,
  },
  rowSeparator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 1,
  },
  rowSeparatorHide: {
    opacity: 0.0,
  }
});
