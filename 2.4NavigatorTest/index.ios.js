/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//
//
//    加入NavigationBar时报错：Element type is invalidXXXX
//
//    原因是navigationBar首字母写成了小写，真够蛋疼的，错误提示的不准确
//
//
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import FirstPageComponent from './FirstPageComponent';

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }
    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableHighlight
        onPress={() => navigator.pop()}
        style={styles.navigationItem}>
        <Text style={styles.navText}>
          {previousRoute.title}
        </Text>
      </TouchableHighlight>
    );
  }

  Title(route, navigator, index, navState) {
    return (
      <Text style={styles.navText}>{route.name} [{index}]</Text>
    );
  }

  RightButton(route, navigator, index, navState) {
    return (
      <Text>right</Text>
    );
  }
};
class NavigatorTest extends Component {
  render() {
    let defaultName = 'FirstPageComponent';
    let defaultComponent = FirstPageComponent;

    return (
      <Navigator
        initialRoute={{ name: defaultName,
                        component: defaultComponent,
                        title: 'page1',}}
        configureScene={ (route) => {
          return Navigator.SceneConfigs.VerticalDownSwipeJump;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navigationBar}
            routeMapper={NavigationBarRouteMapper} />
        }
      />
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
  navigationBar: {
    height: 48,
    backgroundColor: 'gray',
  },
  navigationItem: {
    width: 80,
  },
  navText: {
    color: 'white',
    textAlign: 'center',
  }
});

AppRegistry.registerComponent('NavigatorTest', () => NavigatorTest);
