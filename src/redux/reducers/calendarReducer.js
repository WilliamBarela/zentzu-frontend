import { getCalendarDateObjects } from '../../helpers/findDateLocation';

import {
  YEAR_INCREASE,
  YEAR_DECREASE,
  CHANGE_MONTH,
  CHANGE_WEEK
} from '../actions/actionTypes';

let { calendar, date } = getCalendarDateObjects();

let initialState = {
  calendar,
  date
}

export default function calendarReducer(state = initialState, action) {
  let dateHash;
  let currentMonth;
  let selectedWeek;
  let selectedWeekIndex;
  let weekVal;

  let monthSelected;

  switch (action.type) {
    case YEAR_INCREASE:
      dateHash = {
        year: state.date.year + 1,
        month: state.date.month,
        day: 1
      };
      return getCalendarDateObjects(dateHash, state.date.dateObject);
    case YEAR_DECREASE:
      dateHash = {
        year: state.date.year - 1,
        month: state.date.month,
        day: 1
      };
      return getCalendarDateObjects(dateHash, state.date.dateObject);
    case CHANGE_MONTH:
      // FIXME: wrap this up into a helper funcition and return hash
      monthSelected = action.payload.monthIndex;
      weekVal = state.calendar.months[monthSelected].weeks[0].weekNo;
      return { ...state, date: {...state.date, month: monthSelected, weekIndex: 0, weekVal}}
    case CHANGE_WEEK:
      // FIXME: wrap this up into a helper funcition and return hash
      selectedWeekIndex = action.payload.weekIndex;
      currentMonth = state.date.month;
      selectedWeek = state.calendar.months[currentMonth].weeks[selectedWeekIndex];
      weekVal = selectedWeek.weekNo;
      return { ...state, date: {...state.date, weekIndex: action.payload.weekIndex, weekVal } }
    default:
      return state;
  }
}
