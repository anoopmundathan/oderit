import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width

class Slides extends Component {

  // Render button only in last slide
  renderButton(index) {
    if(index === this.props.data.length - 1) {
      return(
        <Button
          raised
          textStyle={{textAlign: 'center'}}
          title="Let's go"
          buttonStyle={styles.button} 
          onPress={this.props.onSlideComplete}
          />
      )
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
      return(
        <View 
          key={index}
          style={[styles.slide, {backgroundColor: slide.color}]}>
          <Text style={styles.slideText}>{slide.title}</Text>
          {this.renderButton(index)}
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
  },
  button: {
    backgroundColor: '#0288D1',
    marginTop: 15
  }
})
