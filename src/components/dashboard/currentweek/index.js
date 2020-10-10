import React from 'react';
import AddTask from './AddTask';
import DayView from './DayView';

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

export default CurrentWeek;
