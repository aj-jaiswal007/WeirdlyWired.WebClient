import userReducer from './userSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;