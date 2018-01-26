import React, { Component } from 'react'
import { View } from 'react-native'
import { red } from './utils/colors'
import { MainNavigator } from './config/Navigator'
import { AppStatusBar } from './components/AppStatusBar'

import { Provider } from 'react-redux'
import store from './config/store'

export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
      <View style={{ flex: 1 }}>
        <AppStatusBar backgroundColor={red} barStyle='light-content' />
        <MainNavigator/>
      </View>
      </Provider>
    )
  }
}
