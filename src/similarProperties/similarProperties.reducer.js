import initialState from '../app/initialState';

import * as types from './similarProperties.actionTypes';

export default function ourSelectionReducer(
  state = initialState.similarProperties,
  action,
) {
  switch (action.type) {
    case types.LOADED:
      return [...action.properties];

    case types.CLEARED:
      return [];

    default:
      return state;
  }
}
