import React from 'react';
import axios from 'axios';

import PageHeader from '../Template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            list: []
        };

        this.refresh();
    }

    refresh = async () => {
        const resp = await axios.get(`${URL}?sort=-createdAt`);
        this.setState({
            description: '',
            list: resp.data
        });
    }

    handleAdd = async () => {
        const { description } = this.state;
        const response = await axios.post(URL, { description });
        this.refresh();
    }

    handleChange = (e) => this.setState({ description: e.target.value });

    handleRemove = async (task) => {
        await axios.delete(`${URL}/${task._id}`);
        this.refresh();
    }

    render() {
        return (
            <React.Fragment>
                <PageHeader name="Tarefas" small="Cadastro">Todo</PageHeader>
                <TodoForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                />
                <TodoList
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                />
            </React.Fragment>
        );
    }
}