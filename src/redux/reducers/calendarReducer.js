import {
  getCalendarDateObjects
} from '../../helpers/findDateLocation';

let { calendar, date } = getCalendarDateObjects();

let initialState = {
  calendar,
  date
}

export default function calendarReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
