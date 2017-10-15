import { combineReducers } from 'redux';

import filter from 'redux/filter/filter.reducer';
import routes from 'redux/routes/routes.reducer';

export default combineReducers({
    filter,
    routes
});
