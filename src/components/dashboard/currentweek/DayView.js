import React from 'react';

function DayView(props){
  const selectedDate = (props.day.getDate() === props.selectedDate) ? "day-selected" : "";

  return(
    <div className="day-view-card">
      <div className="task-summary-card">
        <ul className="task-list">
          <li><span className="task-urgent">3</span></li>
          <li><span className="task-normal">1</span></li>
          <li><span className="task-completed">5</span></li>
        </ul>
      </div>
      <div className={`day-card ${selectedDate}`}>
        <a href="#">{props.day.getDate()}</a>
      </div>
    </div>
  )
}

export default DayView;
