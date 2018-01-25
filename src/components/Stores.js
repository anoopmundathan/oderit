import React, { Component } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { fetchStoresAction } from '../actions'
import { SearchBar, List, ListItem } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons'

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

  renderIcon = () => <Entypo name='shop' color='red' size={100} />

  render() {
    const { stores } = this.props
    
    if(!this.state.loaded) {
      return(
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    } else {
      return(
        <View>
          <SearchBar 
            lightTheme
            placeholder='Search here' />
            <List containerStyle={{marginTop: 0}}>
              {stores.map((store, index) => (
                <ListItem 
                  leftIcon={this.renderIcon()}
                  hideChevron
                  key={index}
                  title={store.storeName}
                  subtitle={store.storeName} />
              ))}
            </List>
        </View>
      )
    }
  }

}


mapStateToProps = (state) => ({ stores: state.stores, error: state.error })
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
