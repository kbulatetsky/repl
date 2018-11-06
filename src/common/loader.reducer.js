import initialState from '../app/initialState';

import * as types from './loader.actionTypes';
import * as loadStates from './loadState';


const updateLoaderState = (loaders, loaderId, newValues) => {
  const loaderIndex = loaders.findIndex(e => e.id === loaderId);

  if (loaderIndex >= 0) {
    const loadersCopy = [...loaders];
    const loader = loadersCopy[loaderIndex];
    const newObject = Object.assign({}, loader, newValues);
    return loadersCopy.splice(loaderIndex, 1, newObject);
  }

  return loaders;
};

export default function loaderReducer(state = initialState.loaders, action) {
  switch (action.type) {
    case types.CREATE:
      return [
        {
          id: action.id,
          state: loadStates.NOT_STARTED,
          error: null,
        },
        ...state,
      ];

    case types.DELETE:
      return state.splice(state.findIndex(e => e.id === action.id), 0);

    case types.STARTED:
      return updateLoaderState(
        state,
        action.id,
        {
          loadState: loadStates.IN_PROGRESS,
        },
      );

    case types.SUCCESS:
      return updateLoaderState(
        state,
        action.id,
        {
          loadState: loadStates.SUCCESS,
        },
      );

    case types.FAILED:
      return updateLoaderState(
        state,
        action.id,
        {
          loadState: loadStates.FAIL,
          error: action.error,
        },
      );

    default:
      return state;
  }
}
