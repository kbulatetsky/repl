import api from '../api/mockApi';
import * as actionTypes from './ourSelection.actionTypes';
import * as loaderActions from '../common/loader.actions';

function createLoaded(properties) {
  return { type: actionTypes.LOADED, properties };
}

function createCleared() {
  return { type: actionTypes.CLEARED };
}

export function clearOurSelection() {
  return (dispatch) => {
    dispatch(createCleared());
  };
}

export function loadOurSelection(loaderId) {
  return async (dispatch) => {
    dispatch(loaderActions.createStarted(loaderId));
    try {
      const properties = await api.getOurSelection();
      dispatch(createLoaded(properties));
      dispatch(loaderActions.createSuccess(loaderId));
    } catch (err) {
      dispatch(loaderActions.createFailed(loaderId, err));
    }
  };
}
