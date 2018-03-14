import React, { Component } from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { StoreIcon } from './StoreIcon'
import { StoreTitle } from './StoreTitle'

class StoreList extends Component {

  renderStore = ({ item }) => (
    <TouchableOpacity 
      onPress={() => this.props.onPress(item)}>
      <View style={styles.storeContainer}>
        <StoreIcon />
        <StoreTitle item={item} />
      </View>
    </TouchableOpacity>
  )

  render() {
    const { stores } = this.props
      return(
        <View style={{ flex: 1 }}>
          <FlatList 
            data={stores}
            keyExtractor={(store, index) => store._id}
            renderItem={this.renderStore} />
        </View>
      )
  }
}

export default StoreList

const styles = StyleSheet.create({
  storeContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    borderWidth: .5,
    borderColor: '#bdc6cf'
  }
})
