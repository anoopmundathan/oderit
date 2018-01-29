import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { black } from '../../utils/colors'

const Header = (props) => {

  const { items, price } = props

  return(
    <View style={styles.container}>
      <Text style={styles.items}>Total {items} Items</Text>
      <Text style={styles.price}>INR {price}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    marginTop: '5%',
    marginBottom: '5%'
  },
  items: {
    fontSize: 18,
    color: black
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: '3%',
    color: black
  }
})
