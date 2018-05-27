import React from 'react';
import Grid from '../Template/Grid';
import IconButton from '../Template/IconButton';

const TodoForm = props => (
    <div role="form" className="todoForm">
        <Grid sizes={[12, 9, 10]}>
            <input
                type="text"
                id="description"
                className="form-control"
                placeholder="Adicione uma tarefa"
                value={props.description}
                onChange={props.handleChange}
            />
        </Grid>

        <Grid sizes={[12, 3, 2]}>
            <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
        </Grid>
    </div>
);

export default TodoForm;