import React from 'react';

export default class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static sizeClasses = ['xs', 'sm', 'md', 'lg']

    cssClasses = sizes => sizes.map((size, idx) => `col-${Grid.sizeClasses[idx]}-${size}`).join(' ')

    render() {
        return (
            <div className={this.cssClasses(this.props.sizes || [12])}>
                {this.props.children}
            </div>
        );
    }
}