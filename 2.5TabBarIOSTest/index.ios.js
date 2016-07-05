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
  TabBarIOS
} from 'react-native';

class TabBarIOSTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'redTab',
      notifCount: 0,
      presses: 0,
    };
  }

  renderContent(color: string, pageText: string, num?: number) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  }

  render() {
    return (
        <TabBarIOS
          tintColor="white"
          barTintColor="darkslateblue">
          <TabBarIOS.Item
            title="Blue Tab"
            selected={this.state.selectedTab === "blueTab"}
            onPress={()=>{
              this.setState({
                selectedTab: 'blueTab',
              });
            }}>
            {this.renderContent('blue', 'Blue Tab')}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            systemIcon="history"
            badge={this.state.notifCount>0?this.state.notifCount:undefined}
            selected={this.state.selectedTab === "redTab"}
            onPress={()=>{
              this.setState({
                selectedTab: 'redTab',
                notifCount: this.state.notifCount+1,
              });
            }}>
            {this.renderContent('red', 'Red Tab')}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="More"
            selected={this.state.selectedTab==="greenTab"}
            onPress={()=>{
              this.setState({
                selectedTab: "greenTab",
                presses: this.state.presses+1,
              });
            }}
            >
            {this.renderContent('green', 'Green Tab', this.state.presses)}

          </TabBarIOS.Item>
        </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  }
});

AppRegistry.registerComponent('TabBarIOSTest', () => TabBarIOSTest);
