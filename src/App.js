import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Slider from './Components/Slider/Slider'

class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <Slider />
        <Header />
      </div>
    );
  }
}

export default App;
