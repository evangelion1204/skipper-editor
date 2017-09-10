import { merge } from 'lodash';
import {
    ACTIVATE_FILTER,
    DEACTIVATE_FILTER,
    UPDATE_FILTER_ARGUMENT,
} from './filter.js';

const initialState = {
    test: 1,
};

const actionsMap = {
    [ACTIVATE_FILTER]: (state, action) => {
        const { type, name } = action.payload;

        return merge({}, state, {
            [type]: {
                [name]: {
                    active: true
                }
            }
        });
    },

    [DEACTIVATE_FILTER]: (state, action) => {
        const { type, name } = action.payload;

        return merge({}, state, {
            [type]: {
                [name]: {
                    active: false
                }
            }
        });
    },

    [UPDATE_FILTER_ARGUMENT]: (state, action) => {
        const { type, name, index, value } = action.payload;
        const currentArgs = state[type] && state[type][name] && state[type][name] && state[type][name].args || [];
        const args = [...currentArgs];
        args[index] = value;

        return merge({}, state, {
            [type]: {
                [name]: {
                    args
                }
            }
        });
    }
};

export default function reducer(state = initialState, action = {}) {
    const fn = actionsMap[action.type];
    return fn ? fn(state, action) : state;
}