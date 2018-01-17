import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'

class AuthScreen extends Component {
  
  componentDidMount() {
    // this.props.faceBookLogin()
    // AsyncStorage.removeItem('fb_token')
  }

  render() {
    return(
      <View>
        <Text>Auth Screen</Text>
        <Text>Auth Screen</Text>
        <Text>Auth Screen</Text>
        <Text>Auth Screen</Text>
        <Text>Auth Screen</Text>
      </View>
    )
  }
}

export default connect(null, actions)(AuthScreen)
