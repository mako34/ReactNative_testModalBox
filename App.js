/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import Modal from 'react-native-modalbox';

import { TouchableOpacity } from 'react-native';


import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super();
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
    };
  }

  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just openned');
  }

  onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          ss9
        </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={() => this.refs.modal3.open()}>
          <Text style={{fontSize: 13, fontWeight: 'bold', color: 'red'}}>Mestrue</Text>
        </TouchableOpacity>


        <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
          <Text style={styles.text}>Modal centered</Text>

          <TouchableOpacity activeOpacity={0.7} onPress={() => this.refs.modal3.close()}>
          <Text style={{fontSize: 13, fontWeight: 'bold', color: 'blue'}}>Cerrad</Text>
        </TouchableOpacity>


        </Modal>


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
  modal3: {
    height: 300,
    width: 300
  },
});
