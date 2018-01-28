import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { red } from '../../utils/colors'

class Basket extends Component {
  render() {
    const total = this.props.items.reduce((acc, item) => {
      return (item.price * item.qty) + acc
    }, 0)

    return(
      <View style={styles.container}>
        <Text style={styles.checkout}>Total: INR {total} - CHECKOUT</Text>
      </View>
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
    backgroundColor: red
  },
  checkout: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})
