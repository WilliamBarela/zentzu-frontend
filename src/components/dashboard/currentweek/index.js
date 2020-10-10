import React from 'react';
import { connect } from 'react-redux';

import AddTask from './AddTask';
import DayView from './DayView';

function Day(props){
  return(
    <li>
      <AddTask day={props.day}/>
      <DayView day={props.day} selectedDate={props.selectedDate}/>
    </li>
  )
}

function CurrentWeek(props) {
  const dayList = props.days.map( day => 
    <Day 
      key={day.getDate()}
      day={day}
      selectedDate={props.selectedDate}
    />
  );

  return(
    <div className="current-week-card">
      <ul>
        { dayList }
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  const calendar = state.calendarReducer.calendar;
  const selected = state.calendarReducer.date;

  return({
    days: calendar.months[selected.month].weeks[selected.weekIndex].days,
    selectedDate: selected.day
  })
}

export default connect(mapStateToProps)(CurrentWeek);
