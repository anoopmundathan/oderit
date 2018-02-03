import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { red } from '../../utils/colors'

class Basket extends Component {
  render() {
    const total = this.props.items.reduce((acc, item) => {
      return (item.price * item.qty) + acc
    }, 0)

    return(
      <TouchableOpacity
        onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text style={styles.checkout}>Total: INR {total} - VIEW BASKET</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default Basket

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#379392'
  },
  checkout: {
    fontSize: 18,
    color: '#fff'
  }
})
