import React from 'react';
import Grid from '../Template/Grid';
import IconButton from '../Template/IconButton';

const TodoForm = props => {
    const keyHandler = e => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd();
            return;
        }
        if (e.key === 'Escape') {
            props.handleClear();
        }
    }

    return (
        <div role="form" className="row todoForm">
            <Grid sizes={[12, 9, 10]}>
                <input
                    type="text"
                    id="description"
                    className="form-control"
                    placeholder="Adicione uma tarefa"
                    value={props.description}
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                />
            </Grid>

            <Grid sizes={[12, 3, 2]}>
                <div className="btn-group">
                    <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
                    <IconButton style="info" icon="search" onClick={props.handleSearch} />
                    <IconButton style="default" icon="close" onClick={props.handleClear} />
                </div>
            </Grid>
        </div>
    )
}

export default TodoForm;