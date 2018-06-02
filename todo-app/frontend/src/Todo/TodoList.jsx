import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconButton from '../Template/IconButton';
import If from '../Util/If';
import { markAsDone, markAsPending, remove } from './todoActions';

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
                                onClick={() => props.markAsPending(task)}
                            />
                            <IconButton
                                style="success"
                                icon="check"
                                hide={task.done}
                                onClick={() => props.markAsDone(task)}
                            />
                            <IconButton style="danger" icon="trash" onClick={() => props.remove(task)} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const mapStateToProps = state => ({
    list: state.todo.list
});

const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);