import React from 'react';
import './style.css';
import IconArrow from '../../assets/icon-arrow.svg';

function Header () {
  return(
    <header className='header-container'>
      <div className="header-content">
        <h1>IP Address Tracker</h1>

        <div className="header-input">
          <input type="text" placeholder="Search for any IP address or domain" />
          <a href="#" className="header-input-btn">
            <img src={IconArrow} alt=""/>
          </a>
        </div>

        <div className="header-info">
          <div className="info-container">
            <span className="title">IP ADDRESS</span>
            <strong className="content">192.212.174.101</strong>
          </div>

          <div className="info-container">
            <span className="title">LOCATION</span>
            <strong className="content">192.212.174.101</strong>
          </div>

          <div className="info-container">
            <span className="title">TIMEZONE</span>
            <strong className="content">192.212.174.101</strong>
          </div>

          <div className="info-container">
            <span className="title">ISP</span>
            <strong className="content">192.212.174.101</strong>
          </div>

        </div>
      </div>
    </header>
  )
}

export {Header};