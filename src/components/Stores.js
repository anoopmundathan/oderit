import React, { Component } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { fetchStoresAction } from '../actions'

class Stores extends Component {
  
  state = {
    loaded: false
  }

  componentDidMount() {
    this.props.getStores()
      .then(() => {
        this.setState({ loaded: true })
      })
  }

  render() {

    if(!this.state.loaded) {
      return(
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    } else {
      if(this.props.error) {
        return(<View><Text>Error</Text></View>)
      } else {
        return(
         <View>
           {this.props.stores.map(store => <Text key={store._id}>{store.storeName}</Text>)}
         </View>
        )
      }
    }
  }
}


mapStateToProps = (stores, error) => ({ stores, error })
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
