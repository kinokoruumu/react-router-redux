import React from "react";
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import { store } from '../store/configureStore';
import { getHistory } from "../router/configureRouter"
import { Route } from 'react-router'

import Home from '../containers/Home';
import About from "./About.jsx";

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={getHistory(history)}>
            <div>
                <Route path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </div>
        </ConnectedRouter>
    </Provider>
)

export default App;
