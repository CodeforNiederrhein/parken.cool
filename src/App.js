import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import { lighten } from 'material-ui/utils/colorManipulator'

injectTapEventPlugin()

import Home from './scenes/Home'
import Info from './scenes/Info'
import NoMatch from './scenes/NoMatch'

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

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Switch>
            <Route exact path="/:city" component={Home}/>
            <Route path="/:city/info" component={Info}/>
            <Redirect strict from='/' to={`/${window.localStorage.getItem('city') || 'kleve'}`} />
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
