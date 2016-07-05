/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  DatePickerIOS,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//
// ES5
//
var DatePickerExample = React.createClass({
  getDefaultProps: function() {
    return {
      date: new Date(),
      timeZoneOffsetInHours: (-1)*(new Date()).getTimezoneOffset()/60,
    };
  },

  getInitialState: function() {
    return {
      date: this.props.date,
    };
  },

  onDateChange: function(date) {
    this.setState({date: date});
  },

  render: function() {
    return (
        <DatePickerIOS
          date={this.state.date}
          mode="datetime"
          // timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours*60}
          onDateChange={this.onDateChange}
          minuteInterval={10}
        />
    );
  }
});

//
// ES6
//
class DatePickerExampleES6 extends Component {
    static defaultProps = {
      date: new Date(),
    }

    constructor(props) {
      super(props);

      // 注意作用域，必须绑定
      this.onDateChange = this.onDateChange.bind(this);
    }

    state = {
      date: this.props.date,
    }

    onDateChange(date) {
      // 以下两种都可以
      // this.setState({date});
      this.setState({date: date});
    }

    render() {
      return (
        <DatePickerIOS
          date={this.state.date}
          mode="datetime"
          onDateChange={this.onDateChange}
        />
      )
    }
}

class DatePickerIOSTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DatePickerExampleES6 style={styles.datepicker} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center', 不能要这句，不然看不到控件
    backgroundColor: 'yellow',
  },
  datepicker: {
    backgroundColor: 'green',
    marginBottom: 10,
  }
});

AppRegistry.registerComponent('DatePickerIOSTest', () => DatePickerIOSTest);
