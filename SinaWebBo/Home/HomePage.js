import React, { Component } from 'react';
import {
  Navigator,
  View,
  Alert,
  Text,
  StyleSheet,
  ListView,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';

import Const from '../Other/Const';
import StatusCell from './StatusCell';

var resultsCache = {
    data: [],
};

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isLoadingTail: false,
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
    {/* 有点坑爹啊，计算max_id时数组的两个length都写成了legth
        都没报错，默默的得到max_id＝0 */}
    AsyncStorage.getItem(Const.ACCESSTOKEN_KEY)
      .then((token) => {
        let  max_id = resultsCache.data.length > 0 ?
                      resultsCache.data[resultsCache.data.length-1].id-1 :
                      0;
        let params = '?since_id=0' +
                     '&max_id=' + max_id +
                     '&count=' + 20 +
                     '&access_token=' + token;
        fetch('https://api.weibo.com/2/statuses/home_timeline.json'+params,
          {
              method: 'GET',
          })
          .then((response) => response.json())
          .catch((error) => Alert.alert('error', error))
          .then((responseData) => {
            {/* 按下面写不对，因为concat不会改变当前数组 */}
            {/* resultsCache.data.concat(responseData.statuses); */}
            resultsCache.data = resultsCache.data.concat(responseData.statuses);
            // 切记是这样写
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(resultsCache.data)
            })
            // ，而不是,我说怎么没数据
            // this.state.dataSource.cloneWithRows(responseData.statuses);
          })
          .done(() => {
            this.setState({
              isLoadingTail: false,
            });
          });
      })
      .catch((error) => Alert.alert('error', error))
      .done();
  }

  renderRow(status: Object,
             sectionID: number|string,
             rowID: number|string,
             highlightRowFunc: (sectionID: ?number|string, rowID: ?number|string) => void) {
    return (
      <StatusCell status={status}/>
    );
  }

  renderFooter() {
    if (!this.state.isLoadingTail) {
      return <Text style={{alignSelf:'center'}}>----End----</Text>
    }
    return <ActivityIndicator style={styles.scrollSpinner} />
  }

  renderSeparator(sectionID: number|string,
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

  onEndReached() {
    if (this.state.isLoadingTail) {
      return;
    }
    console.log('-------');
    this.setState({
      isLoadingTail: true,
    });
    this.getStatuses();
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          ref="listview"
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          renderFooter={this.renderFooter.bind(this)}
          renderSeparator={this.renderSeparator.bind(this)}
          onEndReached={this.onEndReached.bind(this)}
          automaticallyAdjustContentInsets={true}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps={true}
          showsVerticalScrollIndicator={true}
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
