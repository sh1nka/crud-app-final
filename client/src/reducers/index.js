import { combineReducers } from 'redux';
import users from './dashboard';

const rootReducer = combineReducers({
    users: users,
});

export default rootReducer;