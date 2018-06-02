import React from 'react';
import { render } from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import Field from './Field';
import fieldReducer from './fieldReducer'

const reducers = combineReducers({
    field: fieldReducer
})

render(
    <Provider store={createStore(reducers)}>
        <Field initialValue="xpto" />
    </Provider>,
    document.getElementById('app')
);