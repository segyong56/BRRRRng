import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';
import chargersReducer from './chargersReducer';

const rootReducer = combineReducers({
    userReducer,
    authReducer,
    chargersReducer
});

export default rootReducer;