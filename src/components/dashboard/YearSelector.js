import React from 'react';
import { connect } from 'react-redux';

import {
  yearIncrease,
  yearDecrease
} from '../../redux/actions/calendarActions';


function YearSelector(props) {
  const handleYearDecrement = (e) => {
    props.actions.yearDecrease();
  };

  const handleYearIncrement = (e) => {
    props.actions.yearIncrease();
  };

  return(
    <div className="year-card">
      <span className="year-decrease" onClick={handleYearDecrement}>&#x2B05;</span>
      <span className="year-text">{props.year}</span>
      <span className="year-increase" onClick={handleYearIncrement}>&#x27A1;</span>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    year: state.calendarReducer.date.year
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      yearIncrease: () => { dispatch( yearIncrease() ) },
      yearDecrease: () => { dispatch( yearDecrease() ) }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YearSelector);
