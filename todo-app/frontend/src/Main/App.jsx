import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';
import React from 'react';
import Menu from '../Template/Menu'
import Routes from './Routes';

const App = props => (
    <React.Fragment>
        <Menu></Menu>
        <div className="container-fluid">        
            <Routes></Routes>
        </div>
    </React.Fragment>    
);

export default App;