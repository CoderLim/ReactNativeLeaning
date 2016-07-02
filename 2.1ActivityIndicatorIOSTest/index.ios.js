/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TimerMixin from 'react-timer-mixin';
import {
  ActivityIndicatorIOS,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var ToggleAnimatingActivityIndicator = React.createClass({
  mixins: [TimerMixin],

  getInitialState: function() {
    return {
      anmating: true,
    };
  },

  setToggleTimeout: function() {
    this.setTimeout(
      () => {
        this.setState({animating: !this.state.animating});
        this.setToggleTimeout();
      },
      1200
    );
  },

  componentDidMount: function() {
    this.setToggleTimeout();
  },

  render: function() {
    return (
      <ActivityIndicatorIOS
        animating={this.state.animating}
        style={[styles.centering], {height:80}}
        size="large"
      />
    );
  }
});

class ActivityIndicatorIOSTest extends Component {
  render() {
    return (
        <ToggleAnimatingActivityIndicator />
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
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('ActivityIndicatorIOSTest', () => ActivityIndicatorIOSTest);
