import _ from 'lodash';
import {FETCH_TRAINS} from '../actions';


export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_TRAINS:
            return action.payload.data;
        default:
            return state;
    }
}