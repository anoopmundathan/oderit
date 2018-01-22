import React, { Component } from 'react'
import { View } from 'react-native'
import { red } from './utils/colors'
import { MainNavigator } from './components/Navigator'
import { AppStatusBar } from './components/AppStatusBar'

export default class App extends Component {
  render() {
    return(
      <View style={{ flex: 1 }}>
        <AppStatusBar backgroundColor={red} barStyle='light-content' />
        <MainNavigator/>
      </View>
    )
  }
}
