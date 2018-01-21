import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { MapView } from 'expo'
import MapScreen from './components/MapScreen'

const TestScreen = () => <View><Text>Test</Text></View>

const MainNavigator = TabNavigator({
  Map: {
    screen: MapScreen
  },
  Test: {
    screen: TestScreen
  }
},
  {
    lazy: true,
    tabBarPosition: 'bottom',
    navigationOptions: {
      tabBarVisible: true
    }
  })
export default class App extends Component {
  render() {
    return(
      <MainNavigator/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
