import { merge } from 'lodash';
import {
    PARSE_ROUTES_FINISHED,
    PARSE_ROUTES_STARTED,
} from './routes.js';

const initialState = {
    routes: [],
    loading: false
};

const actionsMap = {
    [PARSE_ROUTES_STARTED]: (state, action) => merge({}, state, { loading: true }),
    [PARSE_ROUTES_FINISHED]: (state, action) => merge({}, state, {
        loading: false,
        routes: action.payload
    }),
};

export default function reducer(state = initialState, action = {}) {
    const fn = actionsMap[action.type];
    return fn ? fn(state, action) : state;
}
