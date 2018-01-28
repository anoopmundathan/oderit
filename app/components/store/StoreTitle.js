import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet } from 'react-native'
import { black, gray } from '../../utils/colors'

export class StoreTitle extends Component {

  render() {
    const { storeName, firstName } = this.props.item
    return(
      <View style={styles.container}>
        <Text style={styles.name}>{storeName}</Text>
        <Text style={styles.secondName}>{firstName}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flex: 2,
    paddingLeft: '1%',
    paddingTop: '5%',
  },
  name: {
    fontSize: 18,
    color: black
  },
  secondName: {
    marginTop: 10,
    color: gray
  }
})

