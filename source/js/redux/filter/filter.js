export const ACTIVATE_FILTER = 'ACTIVATE_FILTER';
export const DEACTIVATE_FILTER = 'DEACTIVATE_FILTER';
export const UPDATE_FILTER_ARGUMENT = 'UPDATE_FILTER_ARGUMENT';

export const getFilters = (state) => state.filter;
export const getFiltersByType = (state, type) => state.filter[type];

export function activateFilter(type, name) {
    return {
        type: ACTIVATE_FILTER,
        payload: {
            type,
            name
        }
    };
}

export function deactivateFilter(type, name) {
    return {
        type: DEACTIVATE_FILTER,
        payload: {
            type,
            name
        }
    };
}

export function updateFilterArgument(type, name, index, value) {
    return {
        type: UPDATE_FILTER_ARGUMENT,
        payload: {
            type,
            name,
            index,
            value
        }
    };
}