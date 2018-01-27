import axios from 'axios';

export const SELECT_STATION = 'select_station';
export const FETCH_STATIONS = 'fetch_stations';
export const FETCH_TRAINS = 'fetch_trains';

const ROOT_URL = 'https://rata.digitraffic.fi/api/v1';

export function fetchStations() {
    const request = axios.get(`${ROOT_URL}/metadata/stations`);

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({
                type: FETCH_STATIONS,
                payload: request
            })
        });
    };
}


export function fetchTrains(stationShortCode) {
    const request = 
    axios.get(`${ROOT_URL}/live-trains/station/${stationShortCode}?arrived_trains=0&arriving_trains=5&departed_trains=0&departing_trains=5`);

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({
                type: FETCH_TRAINS,
                payload: request
            })
        });
    };
}

export function selectStation(station) {
    return {
        type: SELECT_STATION,
        payload: station
    };
}