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

  switch (action.type) {
    case YEAR_INCREASE:
      dateHash = {
        year: state.date.year + 1,
        month: state.date.month,
        day: 1
      };
      return getCalendarDateObjects(dateHash);
    case YEAR_DECREASE:
      dateHash = {
        year: state.date.year - 1,
        month: state.date.month,
        day: 1
      };
      return getCalendarDateObjects(dateHash);
    case CHANGE_MONTH:
      dateHash = {
        year: state.date.year,
        month: action.payload.monthIndex,
        day: 1
      }
      return getCalendarDateObjects(dateHash);
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
