import React from 'react';
import { connect } from 'react-redux';


function YearSelector(props) {
  return(
    <div className="year-card">
      <span className="year-decrease">&#x2B05;</span>
      <span className="year-text">{props.year}</span>
      <span className="year-increase">&#x27A1;</span>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    year: state.calendarReducer.date.year
  }
}

export default connect(mapStateToProps)(YearSelector);
