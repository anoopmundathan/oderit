import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Slides from '../components/Slides'

const SLIDE_DATA = [
  { title: 'Welcome to oderIt', color: '#03A9F4' },
  { title: 'Your local grocery app', color: '#009688' }, 
  { title: 'Set location and order', color: '#03A9F4' }
]

class WelcomeScreen extends Component {

  onSlideComplete = () => {
    this.props.navigation.navigate('auth')
  }

  render() {
    return(
      <Slides 
        data={SLIDE_DATA} 
        onSlideComplete={this.onSlideComplete} />
    )
  }
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue'
  }, 
  text: {
    fontSize: 30,
    color: '#fff'
  }
})
