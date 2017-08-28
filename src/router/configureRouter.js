import createHistory from 'history/createBrowserHistory'

const history = createHistory()

export const getHistory = () => {
    return history
}