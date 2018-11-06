import * as types from './loader.actionTypes';

export function createCreateLoader(id) {
  return { type: types.CREATE, id };
}

export function createDeleteLoader(id) {
  return { type: types.DELETE, id };
}

export function createStarted(id) {
  return { type: types.STARTED, id };
}

export function createSuccess(id) {
  return { type: types.SUCCESS, id };
}

export function createFailed(id, err) {
  return { type: types.FAILED, id, error: err };
}
