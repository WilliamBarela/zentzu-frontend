export function currentDestructuredDate (dateObject = (new Date)) {
  dateObject.setHours(0,0,0,0);

  let year = dateObject.getFullYear();
  let month = dateObject.getMonth();
  let day = dateObject.getDate();

  return { year, month, day }
}

export function findDateLocation (calendar, destructuredDate = currentDestructuredDate()) {
  const {year, month, day} = destructuredDate;

  let dateObject = new Date(`${year}-${month + 1}-${day}.`);
  let currentMonthWeeks = calendar.months[month].weeks

  let weekVal;
  let dateIndex;
  let weekIndex = 0;

  for(const week of currentMonthWeeks) {
    let dateLocation = week.days.findIndex( day => day.valueOf() === dateObject.valueOf() );
    if( dateLocation >= 0 ){
      weekVal = week.weekNo;
      dateIndex = dateLocation;
      break;
    }
    weekIndex += 1;
  }
  
  return {...destructuredDate, weekIndex, weekVal, dateIndex, dateObject }
}
