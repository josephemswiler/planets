import React, { Component } from 'react'
import './App.css'
import Space from './components/Space'
import Menu from './components/Menu'
import Selector from './components/Selector'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Space />
        <Menu />
        <Selector />
      </div>
    )
  }
}

export default App
