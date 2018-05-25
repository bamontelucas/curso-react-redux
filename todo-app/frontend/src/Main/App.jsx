import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';
import React from 'react';
import Todo from '../Todo/Todo';
import About from '../About/About';

export default props => (
    <div className="container">
        <Todo></Todo>
        <About></About>
    </div>
)