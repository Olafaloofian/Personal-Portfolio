import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

class App extends Component {
  render() {
    return (
      <div className='app-container'>
        {routes}
        <Header />
      </div>
    );
  }
}

export default App;
