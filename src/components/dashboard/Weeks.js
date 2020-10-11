import React from 'react';
import { connect } from 'react-redux';
import {
  changeWeek
} from '../../redux/actions/calendarActions';

function Week(props) {
  const itemSelected = (props.value === props.selectedWeek) ? "item-selected" : "";

  const handleChangeWeek = (e) => {
    const weekIndex = parseInt(e.target.value);
    props.actions.changeWeek(weekIndex)
  }

  return(
    <li className={itemSelected} value={props.weekIndex} onClick={handleChangeWeek}>{props.value}</li>
  )
}

function Weeks(props) {
  const weekList = props.weeks.map( (week, weekIndex) => 
    <Week 
      key={week.weekNo}
      value={week.weekNo}
      selectedWeek={props.selectedWeek}
      actions={props.actions}
      weekIndex={weekIndex}
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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      changeWeek: (weekIndex) => { dispatch( changeWeek(weekIndex) ) }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weeks);
