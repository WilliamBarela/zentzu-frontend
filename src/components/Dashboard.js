import React from 'react';
import logo from '../img/logo.svg';

import '../css/dashboard.css';

function Logo() {
  return(
    <h1>logo</h1>
  )
}

function Weeks() {
  return(
    <h1>Weeks</h1>
  )
}

function Months() {
  return(
    <div className="month-card">
      <h4>Months</h4>
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
    <h1>Year</h1>
  )
}

class Dashboard extends React.Component {
  render() {
    return(
      <>
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
      </>
    )
  }
}

export default Dashboard;
