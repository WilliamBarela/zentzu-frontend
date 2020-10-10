import React from 'react';
import { connect } from 'react-redux';

function Month(props) {
  const itemSelected = (props.monthIndex === props.selectedMonth) ? "item-selected" : "";
  return(
    <li className={itemSelected}><a href="#">{props.monthName}</a></li>
  )
}

function Months(props) {
  const monthList = props.months.map( month => 
    < Month
      key={month.details.index}
      monthName={month.details.name}
      monthIndex={month.details.index}
      selectedMonth={props.selectedMonth}
    />
  );

  return(
    <div className="month-card">
      <ul className="months">
        { monthList }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return({
    months: state.calendarReducer.calendar.months,
    selectedMonth: state.calendarReducer.date.month
  })
}

export default connect(mapStateToProps)(Months);
