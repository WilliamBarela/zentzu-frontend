import React from 'react';
import { connect } from 'react-redux';
import {
  changeMonth
} from '../../redux/actions/calendarActions';

function Month(props) {
  const itemSelected = (props.monthIndex === props.selectedMonth) ? "item-selected" : "";

  const handleChangeMonth = (e) => {
    let monthIndex = parseInt(e.target.id);
    props.actions.changeMonth(monthIndex);
  }

  return(
    <li className={itemSelected} id={props.monthIndex} onClick={handleChangeMonth}>{props.monthName}</li>
  )
}

function Months(props) {

  const monthList = props.months.map( month => 
    < Month
      key={month.details.index}
      monthName={month.details.name}
      monthIndex={month.details.index}
      selectedMonth={props.selectedMonth}
      actions={props.actions}
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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      changeMonth: (monthIndex) => { dispatch( changeMonth(monthIndex) ) }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Months);
