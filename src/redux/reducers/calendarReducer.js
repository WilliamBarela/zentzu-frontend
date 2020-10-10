import { getCalendarDateObjects } from '../../helpers/findDateLocation';

import {
  YEAR_INCREASE,
  YEAR_DECREASE
} from '../actions/actionTypes';

let { calendar, date } = getCalendarDateObjects();

let initialState = {
  calendar,
  date
}

export default function calendarReducer(state = initialState, action) {
  let dateHash;

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
    default:
      return state;
  }
}
