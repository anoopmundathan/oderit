import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { red } from '../utils/colors'

class Search extends Component {

  render() {
    return(
      <View style={styles.container}>
        <Button
          large
          raised
          title="Search"
          fontSize={20}
          borderRadius={3}
          backgroundColor={red}
          onPress={() => this.props.onSearch()}
          icon={ { name: 'search' }} />
      </View>
    )
  }
}

export default Search

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    left: 25,
    right: 25
  }
})
