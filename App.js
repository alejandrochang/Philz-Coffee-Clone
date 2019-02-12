/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Select a pick-up location</Text>
        <Text style={styles.textHead}>Ecstatic again?</Text>
        <Text style={styles.text}>Large, Light Cream, Light Sugar, Iced</Text>
        <View style={styles.textInput}>
          <TextInput
            placeholder="Search for a Coffeeshop"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    backgroundColor: "#FFAD24",
  },
  toptext: {
    fontSize: 20,
    textAlign: "center",
    color: "#3A2C22",
    textAlignVertical: 'top',
    width: '100%',
    height: '20%'
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
    color: "#3A2C22",
  },
  textHead: {
    fontSize: 35,
    textAlign: "center",
    color: "#3A2C22",
    fontWeight: 'bold',
    // fontFamily: 'Cochin',
  }
});
