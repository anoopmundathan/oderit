import React, { Component } from 'react'
import { 
  View, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { fetchStoresAction } from '../../actions'

import { Loading } from '../Loading'
import { StoreIcon } from './StoreIcon'
import { StoreTitle } from './StoreTitle'

class StoreList extends Component {
  
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
    <TouchableOpacity 
      onPress={() => this.props.onPress(item._id)}>
      <View style={styles.storeContainer}>
        <StoreIcon />
        <StoreTitle item={item} />
      </View>
    </TouchableOpacity>
  )

  render() {
    const { stores } = this.props

    if(!this.state.loaded) {
      return(
        <Loading />
      )
    } else {
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
}

mapStateToProps = state => ({ stores: state.stores, error: state.error })

mapDispatchToProps = dispatch => ({ getStores: () => dispatch(fetchStoresAction()) })

export default connect(mapStateToProps, mapDispatchToProps)(StoreList)

const styles = StyleSheet.create({
  storeContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    borderWidth: .5,
    borderColor: '#bdc6cf'
  }
})
