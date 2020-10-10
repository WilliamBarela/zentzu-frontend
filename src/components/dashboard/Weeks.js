import React from 'react';
import { connect } from 'react-redux';

function Week(props) {
  const itemSelected = (props.value === props.selectedWeek) ? "item-selected" : "";

  return(
    <li className={itemSelected}><a href="">{props.value}</a></li>
  )
}

function Weeks(props) {
  const weekList = props.weeks.map( week => 
    <Week 
      key={week.weekNo}
      value={week.weekNo}
      selectedWeek={props.selectedWeek}
    />
  );

  return(
    <div className="weeks-card">
      <ul className="weeks">
        { weekList }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  const calendar = state.calendarReducer.calendar;
  const selected = state.calendarReducer.date;

  return({
    weeks: calendar.months[selected.month].weeks,
    selectedWeek: selected.weekVal
  });
}

export default connect(mapStateToProps)(Weeks);
