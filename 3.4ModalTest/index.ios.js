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
  Modal,
  TouchableHighlight,
  View
} from 'react-native';

class ModalTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationType: 'none',// none, slide, fade
      modalVisible: true,
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType={this.state.animationType}
          visible={this.state.modalVisible}
          transparent={true}
          onRequestClose={() => {this.setModalVisible(false);}}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableHighlight style={styles.modalClose} onPress={() => {this.setModalVisible(false);}}>
                <Text>关了Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <Text>This is the title!</Text>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableHighlight onPress={() => {this.setModalVisible(true);}}>
          <Text>
            Click Me! Modal!
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,1)',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  modalClose: {
    padding: 10,
    backgroundColor: 'purple',
    borderRadius: 5,
  },
  modalContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 250,
    borderRadius: 10,
    backgroundColor: 'lightgray',
  }
});

AppRegistry.registerComponent('ModalTest', () => ModalTest);
