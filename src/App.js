import React, { Component } from 'react';
import './App.css';
import BarChart from './myD3App/BarChart';
import WorldMap from './myD3App/WorldMap';

class App extends Component {
  render() {
    return (
      <div className='App'>
      <div className='App-header'>
      <h2>My-d3 dashboard</h2>
      </div>
      <div>
     <BarChart data={[5,10,1,3]} size={[500,500]} />
      <WorldMap/>
      </div>
      </div>
    );
  }
}

export default App;
