import React, { Component } from 'react'
import api from './Resources/sensitive/api.json'
import { getData } from '../components/APIClient'
import parksList from './Resources/parks.json'
import { Map, GoogleApiWrapper, Polygon, InfoWindow } from 'google-maps-react'

export class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      venueData: []
    }

    this.clickPark = this.clickPark.bind(this)
  }

  componentDidMount() {
    getData('Shops').then((data) => {
      this.setState({
        venueData: data
      }, () => {
        this.render();
        this.forceUpdate();
      })
    })
  }

  clickPark(e) {
    console.log('Park clicked! -> ', e)
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        initialCenter={{ lat: parksList.initialCoords.lat, lng: parksList.initialCoords.lng }}
      >
        {this.state.venueData.map(venue => {
          console.log(venue)
          console.log(this.props.dayofweek)
          return (
            <InfoWindow
              key={venue.id}
              visible={venue !== undefined && venue !== null}
              position={{ lat: venue.coordinates.lat, lng: venue.coordinates.lng }}
              onClick={this.clickPark}>
              <div>
                <h5>{venue.name}</h5>
                <p>Busy level for {venue.populartimes[this.props.currentime[0]].name} @ {this.props.currentime[2]} is: {venue.populartimes[this.props.currentime[0]].data[this.props.currentime[1]]} %</p>
                {
                  venue.time_spent
                    ?
                    <p>Typical time spent at this venue: from {venue.time_spent[0]} minutes</p>
                    : null
                }
              </div>
            </InfoWindow>
          )
        })}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: api.name
})(MapContainer)
