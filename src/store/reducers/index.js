import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { counter } from './counter';

const reducers = combineReducers({
    counter,
    router: routerReducer
});

export default reducers;