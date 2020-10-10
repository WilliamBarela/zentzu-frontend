import React from 'react';

import '../css/dashboard.css';

import Logo from './Logo';
import YearSelector from './dashboard/YearSelector';
import Months from './dashboard/Months';
import Weeks from './dashboard/Weeks';
import CurrentWeek from './dashboard/currentweek';

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
          <YearSelector />
      </div>
    )
  }
}

export default Dashboard;
