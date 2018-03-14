import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Loading } from '../components/Loading'
import { SearchBar } from 'react-native-elements'
import StoreList from '../components/store'
import { fetchStoresAction, fetchItemsAction } from '../actions'
import { connect } from 'react-redux'

class StoresScreen extends Component {

  // Fetch stores data from firebase to redux store
  componentDidMount() {
    this.props.getStores()
  }

  onStorePressed = (store) => {
    this.props.getItems(store)
    this.props.navigation.navigate('Items')
  }

  renderStores = () => {
    const { stores } = this.props
    return(
      <View style={{ flex: 1 }}>
        <SearchBar lightTheme placeholder='Search here' />
        <StoreList stores={stores} onPress={this.onStorePressed} />
      </View>
    )
  }
  
  render() {
    const { loading, stores } = this.props
    return(
      <View style={{ flex: 1 }}>
        {loading ? (<Loading />) : this.renderStores()}
      </View>
    )
  }

}

const mapStateToProps = ({ stores }) => ({ 
  stores: stores.stores, 
  loading: stores.loading 
})

const mapDispatchToProps = dispatch => ({ 
  getStores: () => dispatch(fetchStoresAction()),
  getItems: store => dispatch(fetchItemsAction(store))
})

export default connect(mapStateToProps, mapDispatchToProps)(StoresScreen)
