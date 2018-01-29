import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { black } from '../../utils/colors'

const ItemsHeader = () => {
  return(
    <View style={styles.container}>
      <View style={{ flex: 2 }}>
        <Text style={styles.title}>Item</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Text style={styles.title}>Price</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Text style={styles.title}>Qty</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Text style={styles.title}>Total</Text>
      </View>
    </View>
  )
}

export default ItemsHeader

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    marginTop: '5%',
    marginBottom: '3%',
    backgroundColor: '#E0E3DA',
    justifyContent: 'space-around',
    paddingTop: '1%',
    paddingBottom: '1%'
  },
  title: {
    fontSize: 18,
    color: black
  }
})
