import api from '../api/mockApi';
import * as actionTypes from './property.actionTypes';
import * as loaderActions from '../common/loader.actions';

function createLoaded(property) {
  return { type: actionTypes.LOADED, property };
}

function createReset() {
  return { type: actionTypes.RESET };
}

export function resetProperty() {
  return (dispatch) => {
    dispatch(createReset());
  };
}

export function loadProperty(loaderId, propertyId) {
  return async (dispatch) => {
    dispatch(loaderActions.createStarted(loaderId));
    try {
      const property = await api.getProperty(propertyId);
      dispatch(createLoaded(property));
      dispatch(loaderActions.createSuccess(loaderId));
    } catch (err) {
      dispatch(loaderActions.createFailed(loaderId, err));
    }
  };
}
