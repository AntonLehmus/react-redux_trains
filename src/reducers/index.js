import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import StationsReducer from './reducer_stations'

const rootReducer = combineReducers({
  stations: StationsReducer,
  form: formReducer
});

export default rootReducer;
