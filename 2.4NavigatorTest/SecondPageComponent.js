import React, { Component } from 'react';
import {
  Navigator,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text
} from 'react-native';

import FirstPageComponent from './FirstPageComponent';

export default class SecondPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.pressBtn = this.pressBtn.bind(this);
  }

  componentDidMount() {
      this.setState({ name: this.props.name });
      this.props.getFeedBack('Im fine');
  }

  pressBtn() {
    const { navigator } = this.props;

    if (navigator) {
      navigator.pop();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.pressBtn}>
          <Text>点我回去</Text>
          <Text>name:{ this.state.name }</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  }
});
