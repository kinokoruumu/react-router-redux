import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { middleware } from '../middlewares'

export const store = createStore(
    reducers,
    applyMiddleware(middleware)
)