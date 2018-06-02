import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import counterActions from './counterActions';

const Counter = props => (
    <div>
        <input type="number" value={props.counter.step} onChange={props.stepChanged}/>
        <br/>
        <button type="button" onClick={props.inc}>+</button>
        <button type="button" onClick={props.dec}>-</button>
        <br/>
        <span>Número: {props.counter.number}</span>
    </div>
);
    
const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchToProps = dispatch => bindActionCreators(counterActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);