import React, { Component } from 'react'
import { Location, Permissions, MapView } from 'expo'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { fetchStores } from '../utils/api'
import Search from '../components/Search'
import { Loading } from '../components/Loading'

class MapScreen extends Component {

  state = {
    mapLoaded: false,
    region: {
      longitude: null,
      latitude: null,
      longitudeDelta: null,
      latitudeDelta: null
    },
    locationResult: null,
    markers: []
  }

  componentDidMount() {
    this._getLocationAsync()
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    
    if(status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location denied'
      })
    }

    let location = await Location.getCurrentPositionAsync({})

    const { longitude, latitude } = location.coords
    this.setState({ 
      region: { 
        longitude,
        latitude,
        longitudeDelta: 0.01050350012498162,
        latitudeDelta: 0.010492913271392013
      },
      mapLoaded: true
    })
  }

  onRegionChangeComplete = (region) => {
    this.setState( { region })
  }

  onSearch = () => {
    this.props.navigation.navigate('Stores')
  }

  render() {
    const { mapLoaded, region } = this.state

    if(!mapLoaded) {
      return(
        <Loading />
      )
    }

    return(
      <View style={styles.container}>
        <MapView 
          region={region}
          onRegionChangeComplete={this.onRegionChangeComplete}
          style={styles.map} />
        <Search onSearch={this.onSearch}/>
      </View>
    ) 
  }
}

export default MapScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
})
