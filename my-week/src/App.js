import React, { Component } from 'react';

import './App.css';
import fakeApi from './services/fakeApi.json';
// //import api from '../services/api';

import Table from './components/Table';

class App extends Component {

  state = {
    days: [],
    temperature_daily_min: [],
    temperature_daily_max: [],
    rel_humidity_daily_avg: [],
  }

  componentDidMount() {
    // api.get('https://nimbus.somar.io/forecast/daily?city=SaoPaulo-SP&reference=Somar&days=15', { headers: { "x-api-key": "api-key" } })
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err));
    this.setState({
      days: fakeApi.days,
      temperature_daily_min: fakeApi.points.forecast.temperature_daily_min,
      temperature_daily_max: fakeApi.points.forecast.temperature_daily_max,
      rel_humidity_daily_avg: fakeApi.points.forecast.rel_humidity_daily_avg,
    });
  }

  render() {
    return (
      <div className="App">
        <Table
          days={this.state.days}
          temperature_daily_min={this.state.temperature_daily_min}
          temperature_daily_max={this.state.temperature_daily_max}
          rel_humidity_daily_avg={this.state.rel_humidity_daily_avg}
        />
      </div>
    );
  }
}

export default App;
