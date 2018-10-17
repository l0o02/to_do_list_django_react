import React, { Component } from 'react';
import ListViewContainer from './containers/ListViewContainer'

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListViewContainer />
      </div>
    );
  }
}

export default App;
