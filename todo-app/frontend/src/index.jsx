import React from 'react';
import {render} from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import promiseMiddleware from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import App from './Main/App';
import reducers from './Main/reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(thunk, multi, promiseMiddleware)(createStore)(reducers, devTools);

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector('#app')
);