import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase, IconButton, List, ListItem, ListItemText } from '@material-ui/core/';
import MapComponent from './Map.js';
import { getData } from '../components/APIClient'
import SearchIcon from '@material-ui/icons/Search';
import './Home.css';

const searchstyle = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
});


const SearchComponent = () => {
  const classes = searchstyle();
  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder='Search for locations'
        inputProps={{ 'aria-label': 'Search for locations' }}
      />
      <IconButton className={classes.iconButton} aria-label='Search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}


export class Home extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      currentime: [0,0,0],
      activeMarker: {},
      selectedPlace: {},
      venueData: [],
      events: []
    };
  }
  componentDidMount() {
    getData('Shops').then((data) => {
      this.setState({
        venueData: data
      }, () => {
        this.check_for_date();
        this.forceUpdate();
      })
    })
  }

  check_for_date() {
    const current_date = new Date();
    const convday = current_date.getDay() - 1 < 0 
    ? 6 : current_date.getDay() - 1 ;
    this.setState( {currentime: 
      [convday, current_date.getHours(), current_date.toLocaleString('en-US', { hour: 'numeric', hour12: true })]});
  }

  render() {
    const mapstyle = {
      width: 'auto',
      height: '75vh',
      position: 'relative',
    }
    return (
      <div className='Home'>
        
        <div
          style={{
            'backgroundColor': 'white',
            'width': '100vw',
            'position': 'relative',
            'borderRadius': '10px',
            'boxShadow': '0 4px 4px 0 rgba(0,0,0,0.1)'
          }}
        >
          <MapComponent
            google={this.props.google}
            onClick={this.onMapClicked}
            zoom={10}
            currentime={this.state.currentime}
          />
        </div>

        <div className='Searchsection'
          style={{
            'backgroundColor': 'white',
            'marginBottom': '20px',
            'padding': '20px',
            'borderRadius': '10px',
            'boxShadow': '0 4px 4px 0 rgba(0,0,0,0.1)'
          }}>
          
        </div>
      </div>
    )
  }
}

export default Home
