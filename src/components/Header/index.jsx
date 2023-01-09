import React, { useState } from 'react';
import './style.css';
import IconArrow from '../../assets/icon-arrow.svg';
import {api} from '../../service';

function Header () {
  const [search, setSearch] = useState('8.8.8.8');
  const [data, setData] = useState({
    ip: null,
    location : {country:'', timezone:''},
    isp: ''
  });

  function submitSearch(ip) {
    api.get(`https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ip}`)
    .then((response) => {
      setData(response.data);
    })
    .catch((error)=>{

    })
  }

  return(
    <header className='header-container'>
      <div className="header-content">
        <h1>IP Address Tracker</h1>

        <div className="header-input">
          <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search for any IP address or domain" />
          <a href="#" onClick={() => submitSearch(search)} className="header-input-btn">
            <img src={IconArrow} alt=""/>
          </a>
        </div>

        {data.ip != null && 
          <div className="header-info">
          <div className="info-container">
            <span className="title">IP ADDRESS</span>
            <strong className="content">{data.ip}</strong>
          </div>

          <div className="info-container">
            <span className="title">LOCATION</span>
            <strong className="content">{data.location.country} - {data.location.region}</strong>
          </div>

          <div className="info-container">
            <span className="title">TIMEZONE</span>
            <strong className="content">{data.location.timezone}</strong>
          </div>

          <div className="info-container">
            <span className="title">ISP</span>
            <strong className="content">{data.isp}</strong>
          </div>

        </div>
        }
        
      </div>
    </header>
  )
}

export {Header};