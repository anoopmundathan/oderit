import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import Item from './Item'

class ItemsList extends Component {

  renderItem = ({ item }) => (
    <Item item={item} />
  )

  render() {
    const { items } = this.props
    return(
      <View style={{ flex: 1 }}>
        <FlatList 
          data={items}
          keyExtractor={(item, index) => item._id}
          renderItem={this.renderItem} />
      </View>
    )
  }
}

mapStateToProps = state => ({ items: state.items })

export default connect(mapStateToProps)(ItemsList)

