import { routerMiddleware } from 'react-router-redux'
import { getHistory } from "../router/configureRouter"

export const middleware = routerMiddleware(getHistory())