import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { fetchStoresAction } from '../actions'
import { SearchBar, List, ListItem } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons'
import StoreList from './StoreList'
import Loading from './Loading'
import { red } from '../utils/colors'

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

  renderStore = ({ item }) => (
    <View style={styles.storeContainer}>
      <View style={styles.storeIcon}>
        <Entypo name='shop' color={red} size={100} />
      </View>
      <View style={styles.storeName}>
        <StoreList 
          name={item.storeName} 
          onPress={this.onStorePressed} />
        </View>
    </View>
  )

  onStorePressed = () => {
    this.props.navigation.navigate('Items')
  }

  render() {
    const { stores } = this.props
    
    if(!this.state.loaded) {
      return(
        <Loading />
      )
    } else {
      return(
        <View>
          <SearchBar 
            lightTheme
            placeholder='Search here' />
            <FlatList 
              data={stores}
              keyExtractor={(store, index) => store._id}
              renderItem={this.renderStore}
            />
        </View>
      )
    }
  }

}


mapStateToProps = state => ({ stores: state.stores, error: state.error })
mapDispatchToProps = dispatch => ({ getStores: () => dispatch(fetchStoresAction()) })
export default connect(mapStateToProps, mapDispatchToProps)(Stores)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  storeContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: .5,
    borderColor: '#bdc6cf'
  },
  storeIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  storeName: {
    flex: 1
  }
})
