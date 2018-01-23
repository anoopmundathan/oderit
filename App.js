import React, { Component } from 'react'
import { View } from 'react-native'
import { red } from './src/utils/colors'
import { MainNavigator } from './src/components/Navigator'
import { AppStatusBar } from './src/components/AppStatusBar'

import { Provider } from 'react-redux'
import store from './src/store'

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
