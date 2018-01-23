import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { fetchStoresAction } from '../actions'

class Stores extends Component {
  
  state = {
    loaded: false
  }

  componentDidMount() {
    this.props.getStores()
  }

  render() {
    if(!this.state.loaded) {
      return(
        <View style={styles.container}>
          <Text>
            Loading...
          </Text>
        </View>
      )
    }

    return(
      <View>
        <Text>Store</Text>
      </View>
    )
  }
}


mapStateToProps = ( { stores }) => ({ stores })
mapDispatchToProps = (dispatch) => {
  return {
    getStores: () => dispatch(fetchStoresAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stores)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
