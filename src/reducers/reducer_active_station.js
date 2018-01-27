import { SELECT_STATION } from '../actions';


export default function(state = null, action) {
    switch(action.type) {
        case SELECT_STATION:
            return action.payload;
        default:
            return state;
    }
}