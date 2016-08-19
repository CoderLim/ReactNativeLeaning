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
  NativeModules,
  NativeAppEventEmitter,
} from 'react-native';

var subscription;// 暂时先定义上，用到再定义也没问题

class NativeModuleIOS extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var CalendarManager = NativeModules.CalendarManager;
    // 函数一
    // CalendarManager.addEvent('Birthday Party', 'test2');
    // 函数二
    // CalendarManager.addEvent2('Birthday party', 'test2', new Date().getTime());
    // 函数三
    // CalendarManager.addEvent3({
    //   name: 'name1',
    //   location: 'location1',
    // });
    // 函数四
    // 这里的回调函数采用了node约定，第一个参数是error
    // CalendarManager.findEvents((error, events) => {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log(events);
    //   }
    // });
    // 函数五：promise
    // 不要只写 updateEvents()
    // this.updateEvents();
    // 六：常量
    // console.log(CalendarManager.firstDayOfTheWeek);
    // 七：枚举
    console.log(CalendarManager.CalendarManagerTypeTest1);

    // 八：向js发送事件
    // Don't forget to unsubscribe, typically in componentWillUnmount
    // subscription = NativeAppEventEmitter.addListener(
    //   'EventReminder',
    //   (reminder) => console.log(reminder.name)
    // );
    // CalendarManager.sendEvent('glm');
  }

  // 不要写成：async function updateEvents()，因为这是ES5的写法
  async updateEvents() {
    try {
      var text = await NativeModules.CalendarManager.findEvents2();
      console.log(text);
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }

  componentWillUnmount() {
    subscription && subscription.remove();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('NativeModuleIOS', () => NativeModuleIOS);
