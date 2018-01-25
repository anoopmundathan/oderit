import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class StoreList extends Component {
  
  _onPress = () => {
    this.props.onPress()
  }

  render() {
    const { name } = this.props
    return(
      <TouchableOpacity 
        onPress={this._onPress}>
        <View style={styles.container}>
          <Text>{name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default StoreList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
