import React from 'react';
import {childrenWithProps} from '../utils/reactUtils';

const Family = props => (
    <div>
        {childrenWithProps(props.children, props)}
    </div>
)

export default Family;