import React, { Component } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

export default class Selector extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle () {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render () {
    return (
      <div className='planet-button-wrapper'>
        <div className='row'>
          <div className='col-12'>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle className='btn btn-outline-danger'>
                <i className='fas fa-angle-right' />
                  Select Planet 
                <i className='fas fa-angle-left' />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Planets</DropdownItem>
                <DropdownItem className='planet-btn' data-name='mercury'>Mercury</DropdownItem>
                <DropdownItem className='planet-btn' data-name='venus'>Venus</DropdownItem>
                <DropdownItem className='planet-btn' data-name='earth'>Earth</DropdownItem>
                <DropdownItem className='planet-btn' data-name='moon'>Moon</DropdownItem>
                <DropdownItem className='planet-btn' data-name='mars'>Mars</DropdownItem>
                <DropdownItem className='planet-btn' data-name='jupiter'>Jupiter</DropdownItem>
                <DropdownItem className='planet-btn' data-name='saturn'>Saturn</DropdownItem>
                <DropdownItem className='planet-btn' data-name='uranus'>Uranus</DropdownItem>
                <DropdownItem className='planet-btn' data-name='neptune'>Neptune</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
        </div>
        <style jsx>{`
          .container-fluid { 
            background: rgba(0, 0, 0, 0.8);
            width: 100%; 
            height: 100%;
            position: absolute; 
            display: none;
          }
          
          .card-wrapper {
            position: absolute; 
            width: 100%;
            right: 0;
            top: 100px;
            display: none;
          }
          
          .card {
            background: rgba(0, 0, 0, 0.5);
          }
          
          .card-title {
            color: #fff;
          }
          
          .dropdown-menu {
            background: rgba(0, 0, 0, 0.5);
            width: 177px;
            color: #fff;
          }
          
          .planet-button-wrapper {
            text-align: center;
            position: absolute; 
            bottom: 100px; 
            left: 0;
            width: 100%;
          }
          
          .planet-btn {
            color: #fff;
            border-radius: 2px;
          }
          
          .btn-outline-danger:hover {
            color: #000;
          }
          
          .fa-angle-right {
              -webkit-animation-duration: 2s;
              animation-duration: 2s;
              -webkit-animation-fill-mode: both;
              animation-fill-mode: both;
              -webkit-animation-timing-function: linear;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
              -webkit-animation-iteration-count: infinite;
              -webkit-animation-name: bounceRight;
              animation-name: bounceRight;
            }
            @-webkit-keyframes bounceRight {
              0%, 100% {
                -webkit-transform: translateX(0px);
                color: #CB5A54;
              }
              50% {
                -webkit-transform: translateX(-5px);
                color: #000;
              }
            }
            @keyframes bounceRight {
              0%, 100% {
                transform: translateX(0px);
                color: #CB5A54;
              }
              50% {
                transform: translateX(-5px);
                color: #000;
              }
            }
          
          .fa-angle-left {
              -webkit-animation-duration: 2s;
              animation-duration: 2s;
              -webkit-animation-fill-mode: both;
              animation-fill-mode: both;
              -webkit-animation-timing-function: linear;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
              -webkit-animation-iteration-count: infinite;
              -webkit-animation-name: bounceLeft;
              animation-name: bounceLeft;
            }
            @-webkit-keyframes bounceLeft {
              0%, 100% {
                -webkit-transform: translateX(0px);
                color: #CB5A54;
              }
              50% {
                -webkit-transform: translateX(5px);
                color: #000;
              }
            }
            @keyframes bounceLeft {
              0%, 100% {
                transform: translateX(0px);
                color: #CB5A54;
              }
              50% {
                transform: translateX(5px);
                color: #000;
              }
            }
      `}</style>
      </div>
    )
  }
}
