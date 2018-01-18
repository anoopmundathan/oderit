import React, { Component } from 'react'
import { MapView } from 'expo'
import { View, ActivityIndicator } from 'react-native'

class MapScreen extends Component {
  state = {
    mapLoaded: false,
    region: {
      longitude: -3.3958619999999655,
      latitude: 55.21728951914383,
      longitudeDelta: 100,
      latitudeDelta: 100
    }
  }

  componentDidMount() {
    this.setState({ mapLoaded: true })
  }

  onRegionChangeComplete = (region) => {
    this.setState( { region })
  }

  render() {
    const { mapLoaded, region } = this.state

    if(!mapLoaded) {
      return(
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      )
    }

    return(
      <MapView 
        region={this.state.region}
        onRegionChangeComplete={this.onRegionChangeComplete}
        style={{flex: 1}}/>
    ) 
  }
}

export default MapScreen
