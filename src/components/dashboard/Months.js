import React from 'react';

function Months() {
  return(
    <div className="month-card">
      <ul className="months">
        <li><a href="#">jan</a></li>
        <li><a href="#">feb</a></li>
        <li><a href="#">mar</a></li>
        <li><a href="#">apr</a></li>
        <li><a href="#">may</a></li>
        <li><a href="#">jun</a></li>
        <li><a href="#">jul</a></li>
        <li><a href="#">aug</a></li>
        <li><a href="#">sep</a></li>
        <li className="item-selected"><a href="#">oct</a></li>
        <li><a href="#">nov</a></li>
        <li><a href="#">dec</a></li>
      </ul>
    </div>
  )
}

export default Months;
