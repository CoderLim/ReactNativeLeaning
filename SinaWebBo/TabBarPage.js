import React, { Component } from 'react';
import {
  TabBarIOS,
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

import TabNavigator from './Other/lib/tab-navigator';
import HomePage from './Home/HomePage';

export default class TabBarPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
  }

  render() {
    return (
    <TabNavigator>
      <TabNavigator.Item
        title="首页"
        renderIcon={() => <Image source={require('./images/TabBar/tabbar_home.png')} />}
        renderSelectedIcon={() => <Image source={require('./images/TabBar/tabbar_home_selected.png')} />}
        titleStyle={{color: 'black'}}
        selectedTitleStyle={{color: 'orange'}}
        selected={this.state.selectedIndex === 0}
        onPress={() => {
          this.setState({
            selectedIndex: 0,
          });
        }}
        >
        <HomePage />
      </TabNavigator.Item>
      <TabNavigator.Item
        title="消息"
        renderIcon={() => <Image source={require('./images/TabBar/tabbar_message_center.png')}/>}
        renderSelectedIcon={() => <Image source={require('./images/TabBar/tabbar_message_center_selected.png')} />}
        titleStyle={{color: 'black'}}
        selectedTitleStyle={{color: 'orange'}}
        selected={this.state.selectedIndex === 1}
        onPress={() => {
          this.setState({
            selectedIndex: 1,
          });
        }}
        >
        <View style={styles.container}><Text>message page</Text></View>
      </TabNavigator.Item>
      <TabNavigator.Item
        title="发布"
        renderIcon={() => <Image source={require('./images/TabBar/tabbar_compose_icon_add.png')} />}
        renderIcon={() => <Image source={require('./images/TabBar/tabbar_compose_icon_add_highlighted.png')} />}
        selected={this.state.selectedIndex === 2}
        onPress={() => {
          this.setState({
            selectedIndex: 2,
          });
        }}
        >
        <View style={styles.container}><Text>release page</Text></View>
      </TabNavigator.Item>
      <TabNavigator.Item
        title="广场"
        renderIcon={() => <Image source={require('./images/TabBar/tabbar_discover.png')}/>}
        renderSelectedIcon={() => <Image source={require('./images/TabBar/tabbar_discover_selected.png')} />}
        titleStyle={{color: 'black'}}
        selectedTitleStyle={{color: 'orange'}}
        selected={this.state.selectedIndex === 3}
        onPress={() => {
          this.setState({
            selectedIndex: 3,
          });
        }}
        >
        <View style={styles.container}><Text>discover page</Text></View>
      </TabNavigator.Item>
      <TabNavigator.Item
        title="我"
        renderIcon={() => <Image source={require('./images/TabBar/tabbar_profile.png')}/>}
        renderSelectedIcon={() => <Image source={require('./images/TabBar/tabbar_profile_selected.png')} />}
        titleStyle={{color: 'black'}}
        selectedTitleStyle={{color: 'orange'}}
        selected={this.state.selectedIndex === 4}
        onPress={() => {
          this.setState({
            selectedIndex: 4,
          });
        }}
        >
          <View style={styles.container}><Text>my page</Text></View>
      </TabNavigator.Item>
    </TabNavigator>
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
