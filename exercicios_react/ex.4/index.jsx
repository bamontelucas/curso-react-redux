import React from 'react';
import {render} from 'react-dom';
import {Primeiro, Segundo} from './component';

render(
    <React.Fragment>
        <Primeiro value="Lucas"/>
        <Segundo value="Lucas"/>
    </React.Fragment>,
    document.getElementById('app')
);


