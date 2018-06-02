import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from '../Template/Grid';
import IconButton from '../Template/IconButton';
import { changeDescription, search, add, clear } from './todoActions';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount () {
        this.props.search();
    }

    keyHandler = e => {
        if (e.key === 'Enter') {
            e.shiftKey ? this.props.search() : this.props.add();
            return;
        }
        if (e.key === 'Escape') {
            this.props.clear();
        }
    }

    render() {   
        const { add, search, changeDescription, clear, description } = this.props;
        return (
            <div role="form" className="row todoForm">
                <Grid sizes={[12, 9, 10]}>
                    <input
                        type="text"
                        id="description"
                        className="form-control"
                        placeholder="Adicione uma tarefa"
                        value={description}
                        onChange={changeDescription}
                        onKeyUp={this.keyHandler}
                    />
                </Grid>
    
                <Grid sizes={[12, 3, 2]}>
                    <div className="btn-group">
                        <IconButton style="primary" icon="plus" onClick={() => add(description)} />
                        <IconButton style="info" icon="search" onClick={search} />
                        <IconButton style="default" icon="close" onClick={clear} />
                    </div>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    description: state.todo.description
});
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, add, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);