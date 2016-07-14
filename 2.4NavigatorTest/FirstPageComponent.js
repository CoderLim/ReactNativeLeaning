import React,{ Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  TouchableOpacity,
  Navigator,
  Text
} from 'react-native';

import SecondPageComponent from './SecondPageComponent';

export default class FirstPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.pressBtn = this.pressBtn.bind(this);
  }

  pressBtn() {
    let _this = this;
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'SecondPageComponent',
        component: SecondPageComponent,
        title: 'page2',
        params: {
          name: 'glm',
          getFeedBack: function(text) {
            _this.setState({feedback: text});
          }
        }
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.pressBtn}>
          <Text>跳转</Text>
          <Text>feedback:{ this.state.feedback }</Text>
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
    backgroundColor: 'yellow',
  }
});
