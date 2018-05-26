import React from 'react';
import {BrowserRouter, Route, Redirect, hashHistory} from 'react-router-dom';
import Todo from '../Todo/Todo';
import About from '../About/About';

export default props => (
    <BrowserRouter history={hashHistory}>
        <React.Fragment>
            <Route path='#/todos' component={Todo}></Route>
            <Route path='#/about' component={About}></Route>
            <Redirect from='*' to='#/todos'></Redirect>
        </React.Fragment>
    </BrowserRouter>
)

