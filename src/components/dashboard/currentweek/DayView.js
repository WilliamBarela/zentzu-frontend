import React from 'react';

function DayView(props){
  const selectedDate = (props.day.valueOf() === props.currentDateObject.valueOf()) ? "day-selected" : "";
  const date = props.day.getDate();
  const day = props.day.toLocaleDateString(undefined, { weekday: 'short' });
  const month = props.day.toLocaleDateString(undefined, { month: 'short' });

  return(
    <div className="day-view-card">
      <div className="task-summary-card"></div>
      <div className={`day-card ${selectedDate}`}>
        <a href="#">
        <span className="day">{day}</span>
        <span className="date">{date}</span>
        <span className="month">{month}</span>
        </a>
      </div>
    </div>
  )
}

export default DayView;
