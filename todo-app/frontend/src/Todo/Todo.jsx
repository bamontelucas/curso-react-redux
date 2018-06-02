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

    refresh = async (description = this.state.description) => {
        const search = description ? `&description__regex=/${description}/` : '';
        const resp = await axios.get(`${URL}?sort=-createdAt${search}`);
        const list = resp.data;

        this.setState({description, list});
    }

    handleSearch = async () => {
        this.refresh();
    }

    handleClear = async () => {
        this.refresh('');
    }

    handleAdd = async () => {
        const { description } = this.state;
        const response = await axios.post(URL, { description });
        this.refresh('');
    }

    handleChange = (e) => {
        this.setState({ description: e.target.value });
    }

    handleRemove = async (task) => {
        await axios.delete(`${URL}/${task._id}`);
        this.refresh();
    }

    handleDone = async (task) => {
        await axios.put(`${URL}/${task._id}`, {done: true});
        this.refresh();
    }

    handleUndo = async (task) => {
        await axios.put(`${URL}/${task._id}`, {done: false});
        this.refresh();
    }


    render() {
        return (
            <React.Fragment>
                <PageHeader name="Tarefas" small="Cadastro">Todo</PageHeader>
                <TodoForm
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />
                <TodoList />
            </React.Fragment>
        );
    }
}