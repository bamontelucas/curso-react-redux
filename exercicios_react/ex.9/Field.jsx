import React from 'react';

export default class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.initialValue
        }
    }

    handleChange = event => {
        const { value } = event.target;
        this.setState({ value });
    }

    render() {
        return (
            <React.Fragment>
                <label>{this.state.value}</label><br/>
                <input type="text" onChange={this.handleChange} value={this.state.value} />
            </React.Fragment>
        );
    }
}