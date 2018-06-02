import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeValue } from './fieldActions';

class Field extends React.Component {
    render() {
        return (
            <React.Fragment>
                <label>{this.props.value}</label><br />
                <input type="text" onChange={this.props.changeValue} value={this.props.value} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    value: state.field.value
});

const mapDispatchToProps = dispatch => bindActionCreators({ changeValue }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Field);