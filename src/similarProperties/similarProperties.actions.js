import api from '../api/mockApi';
import * as actionTypes from './similarProperties.actionTypes';
import * as loaderActions from '../common/loader.actions';

function createLoaded(properties) {
  return { type: actionTypes.LOADED, properties };
}

function createCleared() {
  return { type: actionTypes.CLEARED };
}

export function clearSimilarProperties() {
  return (dispatch) => {
    dispatch(createCleared());
  };
}

export function loadSimilarProperties(loaderId, propertyId) {
  return async (dispatch) => {
    dispatch(loaderActions.createStarted(loaderId));
    try {
      const properties = await api.getSimilarProperties(propertyId);
      dispatch(createLoaded(properties));
      dispatch(loaderActions.createSuccess(loaderId));
    } catch (err) {
      dispatch(loaderActions.createFailed(loaderId, err));
    }
  };
}
