/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
 *
 *  reference: http://reactnative.cn/docs/0.28/animated.html#content
 *
 *
 *  reference2: http://web.jobbole.com/84962/
 *
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  Alert,
  TouchableHighlight,
  Navigator,
  Text,
  View
} from 'react-native';

import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from './Demo4';

export default class AnimatedList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }).cloneWithRows(['primary', 'parallel', 'sequence', 'spring', 'decay']),
    };
    this.state.names = ['Demo1', 'Demo2', 'Demo3', 'Demo4', 'Demo5'];
    this.state.components = [Demo1, Demo2, Demo3, Demo4];
  }

  renderRow(rowData, sectionID, rowID) {
    return (<TouchableHighlight onPress={() => this.onSelectItem(rowData, sectionID, rowID)}>
              <Text style={styles.listItem}>
                {rowData}
              </Text>
           </TouchableHighlight>);
  }

  renderSeparator(sectionID: number| string,
                  rowID: number | string,
                  adjacentRowHighlighted: boolean) {
    return (
      <View key={'sep_'+sectionID+'_'+rowID} style={styles.separator} />
    );
  }

  onSelectItem(rowData: string, sectionID: number|string, rowID: number|string) {
    if (rowID == 4) {
      Alert.alert('提示', '这个比较简单，自己网上搜搜看吧');
      return;
    }
    const { navigator } = this.props;
    let name = 'demo1';
    let component = Demo1;
    navigator.push({
      name: this.state.names[parseInt(rowID)],
      component: this.state.components[parseInt(rowID)],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{"Let's move!"}</Text>
        </View>
        <ListView ref='listview'
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          renderSeparator={this.renderSeparator.bind(this)}
          onItemClick={this.onSelectItem.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5fcff',
  },
  title: {
    marginTop: 20,
    height: 30,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '500',
    color: 'black',
  },
  listView: {
    backgroundColor: '#bfdbb8',
  },
  listItem: {
    backgroundColor: '#dbcbb8',
    paddingVertical: 10,
    textAlign: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#bfbfbf',
  }
});
