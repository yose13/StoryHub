import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadStory from './screens/ReadStory';
import WriteStory from './screens/WriteStory';

export default class App extends React.Component {
  render() {
  return (
      <AppContainer/>
  );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory:{screen:WriteStory},
  ReadStory:{screen:ReadStory}
})

const AppContainer = createAppContainer(TabNavigator);
