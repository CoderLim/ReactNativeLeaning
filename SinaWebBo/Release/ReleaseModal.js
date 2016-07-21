import React, { Component } from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';

export default class ReleaseModal extends Component {
  static propTypes = {
    ...Modal.propTypes,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal {...this.props} >
        <View style={styles.container}>
          <TouchableHighlight
            onPress={() => {this.props.onRequestClose();}}
          >
            <Text>点我返回</Text>
          </TouchableHighlight>
        </View>
      </Modal>
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
