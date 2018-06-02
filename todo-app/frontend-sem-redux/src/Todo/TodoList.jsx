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
                        <td className={task.done ? 'done' : ''}>{task.description}</td>
                        <td className="actionColumn">
                            <IconButton
                                style="warning"
                                icon="undo"
                                hide={!task.done}
                                onClick={() => props.handleUndo(task)} 
                            />
                            <IconButton
                                style="success"
                                icon="check"
                                hide={task.done}
                                onClick={() => props.handleDone(task)}
                            />
                            <IconButton style="danger" icon="trash" onClick={() => props.handleRemove(task)} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default TodoList;