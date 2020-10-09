import React from 'react';

import '../css/dashboard.css';

import Logo from './Logo';
import YearSelector from './dashboard/YearSelector';
import Months from './dashboard/Months';
import Weeks from './dashboard/Weeks';
import AddTask from './dashboard/currentweek/AddTask';

function DayView(props){
  const selected = props.selected ? "day-selected" : "";

  return(
    <div className="day-view-card">
      <div className="task-summary-card">
        <ul className="task-list">
          <li><span className="task-urgent">3</span></li>
          <li><span className="task-normal">1</span></li>
          <li><span className="task-completed">5</span></li>
        </ul>
      </div>
      <div className={`day-card ${selected}`}>
        <a href="#">25</a>
      </div>
    </div>
  )
}

function CurrentWeek() {
  return(
    <div className="current-week-card">
      <ul>
        <li>
          <AddTask />
          <DayView />
        </li>
        <li>
          <AddTask />
          <DayView />
        </li>
        <li>
          <AddTask />
          <DayView selected="true"/>
        </li>
        <li>
          <AddTask />
          <DayView />
        </li>
        <li>
          <AddTask />
          <DayView />
        </li>
        <li>
          <AddTask />
          <DayView />
        </li>
        <li>
          <AddTask />
          <DayView />
        </li>
      </ul>
    </div>
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
          <YearSelector />
        </div>
      </div>
    )
  }
}

export default Dashboard;
