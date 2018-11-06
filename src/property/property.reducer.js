import initialState from '../app/initialState';

import * as types from './property.actionTypes';

export default function propertyReducer(
  state = initialState.property,
  action,
) {
  switch (action.type) {
    case types.LOADED:
      return action.property;

    case types.RESET:
      return null;

    default:
      return state;
  }
}
