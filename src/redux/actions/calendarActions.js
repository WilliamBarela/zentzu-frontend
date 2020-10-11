import {
  YEAR_INCREASE,
  YEAR_DECREASE,
  CHANGE_MONTH
} from './actionTypes';

export const yearIncrease = () => {
  return { type: YEAR_INCREASE }
}

export const yearDecrease = () => {
  return { type: YEAR_DECREASE }
}

export const changeMonth = (monthIndex) => {
  return { type: CHANGE_MONTH, payload: { monthIndex } }
}
