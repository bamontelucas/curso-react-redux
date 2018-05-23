import React from 'react';
import {render} from 'react-dom';
import ClassComponent from './ClassComponent';

render(
    <ClassComponent label="Contador" initialValue={10} />,
    document.getElementById('app')
);