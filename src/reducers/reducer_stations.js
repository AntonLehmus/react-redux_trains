import _ from 'lodash';
import { FETCH_STATIONS } from '../actions';


export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_STATIONS:
            //return array of stations with passenger traffic
            return  _.filter(action.payload.data, function(o) { return o.passengerTraffic; });
        default:
            return state;
    }
}