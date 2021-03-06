import React from 'react';
import { render } from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './counterReducer';
import Counter from './Counter';

const reducers = combineReducers({
    counter: counterReducer
})

render(
    <Provider store={createStore(reducers)}>
        <Counter />
    </Provider>,
    document.getElementById('app')
);