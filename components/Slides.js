import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width

class Slides extends Component {
  renderSlides() {
    return this.props.data.map((slide, index) => {
      return(
        <View 
          key={index}
          style={[styles.slide, {backgroundColor: slide.color}]}>
          <Text style={styles.slideText}>{slide.title}</Text>
        </View>
      )
    })
  }
  render() {
    return(
      <ScrollView
        horizontal
        pagingEnabled
        style={{flex: 1}}>
        {this.renderSlides()}
      </ScrollView>
    )
  }
}

export default Slides

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  slideText: {
    fontSize: 35,
    color: '#fff'
  }
})
