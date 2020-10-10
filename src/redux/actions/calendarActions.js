import {
  YEAR_INCREASE,
  YEAR_DECREASE
} from './actionTypes';

export const yearIncrease = () => {
  return { type: YEAR_INCREASE }
}

export const yearDecrease = () => {
  return { type: YEAR_DECREASE }
}
