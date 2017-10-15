import axios from 'axios';

export const PARSE_ROUTES_STARTED = 'PARSE_ROUTES_STARTED';
export const PARSE_ROUTES_FINISHED = 'PARSE_ROUTES_FINISHED';

export const getRoutes = (state) => state.routes.routes;

export const parseRoutes = (eskip) => (dispatch) => {
    dispatch({
        type: PARSE_ROUTES_STARTED
    });

    return axios.post('http://localhost:4000/transform', { eskip }).then(({data}) => {
        dispatch({
            type: PARSE_ROUTES_FINISHED,
            payload: data.routes
        });
    })
    .catch(error => {
        dispatch({
            type: PARSE_ROUTES_FINISHED,
            payload: []
        });
    });
};

