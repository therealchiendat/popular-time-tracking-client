import React, { Component } from 'react';
import api from './Resources/sensitive/api.json';
import { getData } from '../components/APIClient';
import parksList from './Resources/parks.json';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GoogleMapReact from 'google-map-react';
import HeatMap, { Style } from "jsheatmap";
import './Map.css';

const Circle = ({ text, size, bind }) =>
  <div
    className='circle'
    style={{ width: size + 'px', height: size + 'px' }}
    onClick={bind}>
    {size < 50 ? '' : text}
  </div>;

const Headings = ({ data }) => {
  const titles = () => data.map(h => <th key={h}>{h}</th>)
  return (<tr><th></th>{titles()}</tr>);
}
const background = (rgb) => {
  return `rgb(${rgb.red * 100}%, ${rgb.green * 100}%, ${rgb.blue * 100}%)`;
}

const cols = cells => {
  return cells.colors.map((c, i) => <td key={i}>
    <div style={{ background: background(c)}}>
      <span style={{ fontSize: '0.3em' }}>{cells.scales[i].toFixed(1)}</span>
    </div>
  </td>);
}

const Rows = ({ data }) =>
  data.rows.map((row, i) => <tr key={row.label}>
    <td>{row.label}</td>{cols(row.cells)}
  </tr>
  );

const PopularHeatMap = ({ populartimes }) => {
  const hour = ['1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12a', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p', '12p'];
  const days = populartimes.map((day) => [day.name, [...day.data]]);
  const heatMap = new HeatMap(hour, days);
  const data = heatMap.getData({ style: Style.SIMPLE });
  console.log(data);
  return (
    <table className="heat-map">
      <tbody>
        <Headings data={data.headings} />
        <Rows data={data} />
      </tbody>
    </table>
  )
}

const InfoWindow = ({ venue, date }) =>
  <Card>
    <CardContent className='info'>
      <Typography gutterBottom variant='h5' component='h2'>
        {venue.name}
      </Typography>
      {venue.address ?
        <Typography variant='body2' color='textSecondary' component='p'>
          Address: {venue.address}
        </Typography>
        : null}
      <div className='align-row space-around'>
        {venue.current_popularity ?
          <div className='detail align-column'>
            <Typography variant='body2' color='textSecondary' component='p'>
              Real time
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {venue.current_popularity} %
            </Typography>
          </div>
          : null
        }
        {venue.populartimes ?
          <div className='detail align-column'>
            <Typography variant='body2' color='textSecondary' component='p'>
              Typical level
          </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {venue.populartimes[date[0]].data[date[1]]} %
          </Typography>
          </div>
          : null
        }
      </div>
      {venue.populartimes ?
        <PopularHeatMap populartimes={venue.populartimes} />
        : null
      }
    </CardContent>
  </Card>;



export default class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      venueData: [],
      venueDetail: {
        name: 'Click on a Venue for detail',
      },
      date: this.props.currentime,
    }
    // this.clickVenue = this.clickVenue.bind(this,venue)
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

  clickVenue(venue) {
    console.log('Park clicked! -> ', venue);
    this.setState({
      venueDetail: venue
    })
  }

  render() {
    return (
      <div>
        <div style={{ height: '50vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: api.name }}
            defaultCenter={{ lat: parksList.initialCoords.lat, lng: parksList.initialCoords.lng }}
            defaultZoom={15}
          >
            {this.state.venueData.map(venue => {
              return (
                <Circle
                  key={venue.id}
                  lat={venue.coordinates.lat}
                  lng={venue.coordinates.lng}
                  text={venue.name}
                  size={venue.populartimes[this.state.date[0]].data[this.state.date[1]]}
                  bind={this.clickVenue.bind(this, venue)}

                />
              )
            })}

          </GoogleMapReact>
          <InfoWindow
            venue={this.state.venueDetail}
            date={this.state.date}
          />
        </div>
      </div>
    )
  }
}

