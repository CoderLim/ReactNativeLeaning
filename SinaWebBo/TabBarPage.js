import React, { Component } from 'react';
import {
  TabBarIOS,
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class TabBarPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
  }

  render() {
    return (
      <TabBarIOS
        // unselectedTintColor="yellow"
        tintColor="white"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
          title="首页"
          icon={require('./images/TabBar/tabbar_home.png')}
          selected={this.state.selectedIndex === 0}
          onPress={() => {
            this.setState({
              selectedIndex: 0,
            });
          }}
          >
          <Text>page 0</Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="消息"
          icon={require('./images/TabBar/tabbar_message_center.png')}
          selected={this.state.selectedIndex === 1}
          onPress={() => {
            this.setState({
              selectedIndex: 1,
            });
          }}
          >
          <Text>page 0</Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./images/TabBar/tabbar_compose_icon_add.png')}
          selected={this.state.selectedIndex === 2}
          onPress={() => {
            this.setState({
              selectedIndex: 2,
            });
          }}
          >
          <Text>page 0</Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="广场"
          icon={require('./images/TabBar/tabbar_discover.png')}
          selected={this.state.selectedIndex === 3}
          onPress={() => {
            this.setState({
              selectedIndex: 3,
            });
          }}
          >
          <Text>page 0</Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="我"
          icon={require('./images/TabBar/tabbar_profile.png')}
          selected={this.state.selectedIndex === 4}
          onPress={() => {
            this.setState({
              selectedIndex: 4,
            });
          }}
          >
          <Text>page 4</Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
