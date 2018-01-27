import _ from 'lodash';
import {FETCH_TRAINS} from '../actions';


export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_TRAINS:
            const trains = action.payload.data;
            let trimmed = [];


            trains.forEach(t => {
                trimmed.push({
                    'train': `${t.trainType} ${t.trainNumber}`,
                    'arriving':'',
                    'departing':'',
                    'from': t.timeTableRows[0].stationShortCode,
                    'to':t.timeTableRows[t.timeTableRows.length -1].stationShortCode,
                    'platform':'',
                    'cancelled':t.cancelled
                }
                );
            });
            
            return trimmed;
        default:
            return state;
    }
}