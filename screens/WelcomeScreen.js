import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Slides from '../components/Slides'

const SLIDE_DATA = [
  { title: 'Welcome to oderIt', color: '#03A9F4' },
  { title: 'Your local grocery app', color: '#009688' }, 
  { title: 'Set your location and order item', color: '#03A9F4' }
]

class WelcomeScreen extends Component {
  render() {
    return(
      <Slides 
        data={SLIDE_DATA} />
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
