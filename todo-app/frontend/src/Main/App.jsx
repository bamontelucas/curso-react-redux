import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';
import React from 'react';
import Menu from '../Template/Menu'
import Routes from './Routes';

export default props => (
    <React.Fragment>
        <Menu></Menu>
        <div className="container">        
            <Routes></Routes>
        </div>
    </React.Fragment>    
)