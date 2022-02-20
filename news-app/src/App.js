import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
//c29cc0b04c3e49d3978de27f30e02301 API key
export default class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <News/>
      </div>
    )
  }
}
