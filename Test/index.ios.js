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
  View
} from 'react-native';

import Person from './Person';

class Test extends Component {
  constructor(props) {
    super(props);
    // let p1 = new Person();
    // console.log(Person.instCount);
    // let p2 = new Person();
    // console.log(Person.instCount);
    //
    // // p1.name = 'zwr';
    // // p2.name = 'zwr2';
    // // p1.sayHello();
    // // p2.sayHello();
    // console.log(Person.name1);
    // // console.log(Object.getOwnPropertyDescriptor(p1, 'name1'));

    var sleep = (time) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('done');
        }, time);
      });
    };

    var start = async () => {
      console.log(await sleep(3000));
      console.log('start end');
    };

    start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
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

AppRegistry.registerComponent('Test', () => Test);
