import React, { Component } from 'react'

export default class Menu extends Component {
  render () {
    return (
      <div className='container card-wrapper'>
        <div className='row'>
          <div className='offset-md-6 col-md-6'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title' />
                <h6 className='card-subtitle mb-2 text-muted'>Information</h6>
                <p className='card-text'>
                  Distance from Sun: 67.24 million mi
                  <br /> Radius: 3,760 mi
                  <br /> Orbital period: 225 days
                  <br /> Mass: 4.867 × 10^24 kg (0.815 M⊕)
                  <br /> Equatorial rotation velocity: 6.52 km/h (1.81 m/s)
                  <br /> Average orbital speed‎: ‎35.02 km/s
                  <br /> Surface gravity‎: ‎8.87 m/s2; 0.904 g
                  <br /> Surface area‎: ‎4.6023×108 km2
                  <br />
                </p>
                <button type='button' className='btn btn-outline-danger visit-btn'>
                  <i className='fas fa-angle-right' />
                  <span className='visit-span' />
                  <i className='fas fa-angle-left' />
                </button>
              </div>
            </div>
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
