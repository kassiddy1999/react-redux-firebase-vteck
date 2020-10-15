import authReducer from './authReducer';
import projectReducer from './projectReducer';
// combineReducers : from the redux library- a function that combines reducers into one
import { combineReducers } from 'redux';

// function to combine the reducers
const rootReducer = combineReducers({
    // the list of reducers to combine
    auth: authReducer,
    project: projectReducer,
})

export default rootReducer