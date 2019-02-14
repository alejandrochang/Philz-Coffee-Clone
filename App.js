/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', size: ["large", "small"], sweetness: ["None", "Light", "Medium", "Creamy"]};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.modal}>Select a pick-up location</Text>
        <Text style={styles.text1}>Ecstatic again?</Text>
        <Text style={styles.text2}>Large, Light Cream, Light Sugar, Iced</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold", textAlign: "center", color: "white"}} textStyle={{ fontFamily: 'MarkPro Medium'}}>
              I'll TAKE IT!
            </Text>
          </TouchableOpacity >
        </View>
        <View style={styles.navigationContainer}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFAD24",
  },
  modal: {
    paddingTop: 80,
    fontSize: 12,
  },
  text1: {
    paddingTop: 46,
    paddingBottom: 46,
    fontSize: 32,
    fontWeight: 'bold'
  }, 
  text2: {
    paddingTop: 30,
    paddingBottom: 310,
    fontSize: 12,
  }, 
  button: {
    fontWeight: "900",
    fontSize: 12,
  }, 
  buttonContainer: {
    flex: 2,
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#aa5b06"
  }, 
  navigationContainer: {
    flex: 2,
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#aa5b06",
    marginTop: 1
  }, 
});
