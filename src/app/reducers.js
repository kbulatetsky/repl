import { combineReducers } from 'redux';

import loadersReducer from '../common/loader.reducer';
import ourSelectionReducer from '../ourSelection/ourSelection.reducer';
import propertyReducer from '../property/property.reducer';
import similarPropertiesReducer from '../similarProperties/similarProperties.reducer';

const rootReducer = combineReducers({
  loaders: loadersReducer,
  ourSelection: ourSelectionReducer,
  property: propertyReducer,
  similarProperties: similarPropertiesReducer,
});

export default rootReducer;
