import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import ActiveStationReducer from './reducer_active_station'
import StationsReducer from './reducer_stations';
import TrainsReducer from './reducer_trains';

const rootReducer = combineReducers({
  stations: StationsReducer,
  activeStation: ActiveStationReducer,
  trains: TrainsReducer,
  form: formReducer
});

export default rootReducer;
