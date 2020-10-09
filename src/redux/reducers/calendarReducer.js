import Calendar from '../../helpers/Calendar.js';
import {
  currentDestructuredDate,
  findDateLocation
} from '../../helpers/findDateLocation';

const destructuredDate = currentDestructuredDate();
let calendar = (new Calendar(destructuredDate.year)).yearMonthWeekDay;
let date = findDateLocation(calendar, destructuredDate);

let initialState = {
  calendar,
  date
};

export default function calendarReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
