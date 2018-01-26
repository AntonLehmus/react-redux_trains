import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import StationsReducer from './reducer_stations'
import TrainsReducer from './reducer_trains'

const rootReducer = combineReducers({
  stations: StationsReducer,
  trains: TrainsReducer,
  form: formReducer
});

export default rootReducer;
