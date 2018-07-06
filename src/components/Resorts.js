import React, { Component } from 'react'

export default class Resorts extends Component {
  render () {
    return (
      <div className='resorts'>
        { this.props.children }
      </div>
    )
  }
}
