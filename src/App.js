import React, { Component } from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import { fade, darken, lighten } from 'material-ui/utils/colorManipulator'

injectTapEventPlugin()

import Home from './scenes/Home'

const darkerPink = '#180733'
const darkPink = '#280B54'

const muiTheme = getMuiTheme({
  ...darkBaseTheme,
  palette: {
    ...darkBaseTheme.palette,
    primary1Color: lighten(darkPink, 0.3),
    primary2Color: darkerPink,
    textColor: '#EFEFEF'
  },
  appBar: {
    textColor: '#EFEFEF',
    color: darkerPink
  }
});

console.log(muiTheme)

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Home />
      </MuiThemeProvider>
    );
  }
}

export default App;
