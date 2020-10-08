import React from 'react';
import logo from '../img/logo.svg';

import '../css/dashboard.css';

function Logo() {
  return(
    <div className="logo-card">
      <img src={logo} alt="" className="logo"/>
    </div>
  )
}

function Weeks() {
  return(
    <div className="weeks-card">
      <ul className="weeks">
        <li><a href="#">42</a></li>
        <li><a href="#">43</a></li>
        <li className="item-selected"><a href="#">44</a></li>
        <li><a href="#">45</a></li>
        <li><a href="#">46</a></li>
      </ul>
    </div>
  )
}

function Months() {
  return(
    <div className="month-card">
      <ul className="months">
        <li><a href="#">jan</a></li>
        <li><a href="#">feb</a></li>
        <li><a href="#">mar</a></li>
        <li><a href="#">apr</a></li>
        <li><a href="#">may</a></li>
        <li><a href="#">jun</a></li>
        <li><a href="#">jul</a></li>
        <li><a href="#">aug</a></li>
        <li><a href="#">sep</a></li>
        <li className="item-selected"><a href="#">oct</a></li>
        <li><a href="#">nov</a></li>
        <li><a href="#">dec</a></li>
      </ul>
    </div>
  )
}

function CurrentWeek() {
  return(
    <div className="current-week-card">
      <h4>Current Week</h4>
    </div>
  )
}

function Year() {
  return(
    <button>Year</button>
  )
}

class Dashboard extends React.Component {
  render() {
    return(
      <div className="calendar-card">
        <div className="logo-week-card">
          <Logo />
          <Weeks />
        </div>
        <div className="month-current-week-card">
          <Months />
          <CurrentWeek />
        </div>
        <div className="year-card">
          <Year />
        </div>
      </div>
    )
  }
}

export default Dashboard;
