import React from 'react';
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom';
import Todo from '../Todo/Todo';
import About from '../About/About';

const Routes = props => (
    <HashRouter>
        <Switch>
            <Route path='/todos' component={Todo}></Route>
            <Route path='/about' component={About}></Route>
            <Redirect from='*' to='/todos'></Redirect>
        </Switch>
    </HashRouter>
)

export default Routes;