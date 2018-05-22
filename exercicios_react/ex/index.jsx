import React from 'react';
import {render} from 'react-dom';
import Family from './Family';
import Member from './Member';

render(
    <Family lastName="Corrêa">
        <Member name="Lucas" />
        <Member name="Ana" />
        <Member name="Emerson" />
    </Family>,
    document.getElementById('app')
);


