import React from 'react';
import IconButton from '../Template/IconButton';
import If from '../Util/If';

const TodoList = props => (
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {(props.list || []).map(task => (
                    <tr key={task._id}>
                        <td>{task.description}</td>
                        <td>
                            <If test={task.done}>
                                <IconButton style="default" icon="refresh"/>
                            </If>
                            <If test={!task.done}>
                                <IconButton style="success" icon="check"/>
                            </If>
                            <IconButton style="danger" icon="trash" onClick={() => props.handleRemove(task)}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default TodoList;