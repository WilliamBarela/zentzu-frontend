import React from 'react';
import { connect } from 'react-redux';


function YearSelector(props) {
  return(
    <button>{props.year}</button>
  )
}

const mapStateToProps = (state) => {
  return {
    year: state.calendarReducer.date.year
  }
}

export default connect(mapStateToProps)(YearSelector);
