import React, { Component } from "react";
import Routes from "./Routes";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }
  handleLogout = event => {
    this.userHasAuthenticated(false);
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      <div className="App container">
        <AppBar position='static'>
          <Toolbar className='app-bar'>
            <div></div>
            <Typography variant='h6' className='app-title'>
              Overcrowded
          </Typography>
            <div>
              <IconButton><AccountCircle /></IconButton>
            </div>
          </Toolbar>
        </AppBar>
        
        <Routes childProps={childProps} />
      </div>
    );
  };
}

export default App;
