import axios from 'axios';

export const FETCH_STATIONS = 'fetch_stations';

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
