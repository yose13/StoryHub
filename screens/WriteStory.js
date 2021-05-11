import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import * as Permissions from 'expo-permissions';
import AppHeader from '../components/AppHeader'

export default class WriteStory extends React.Component {
  render() {
  return (
    <View>
    <AppHeader/>
    <TextInput
    style={styles.inputBox}
    placeholder="Story Title"
    />
    <TextInput
    style={styles.inputBox}
    placeholder="Author"
    />
    <TextInput
    style={styles.writeStory}
    placeholder="Write Story"
    />
    <TouchableOpacity
    style={styles.submitButton}>
    <Text>Submit</Text>
    </TouchableOpacity>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 20,
    width: 300,
    alignSelf: 'center',
    height: 40,
    borderWidth: 3
  },
   writeStory: {
    marginTop: 10,
    width: 300,
    height: 200,
    alignSelf: 'center',
    borderWidth: 3
  },
  submitButton: {
    width: '40%',
    height: 45,
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10,
    margin: 20,
    backgroundColor: 'orange'
  },
});
