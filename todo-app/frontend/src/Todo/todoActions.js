import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const changeDescription = e => ({
    type: 'DESCRIPTION_CHANGED',
    payload: e.target.value
});

export const clear = () => (
    async (dispatch) => {
        await dispatch({ type: 'TODO_CLEAR' });
        dispatch(search());
    }
)

export const search = () => (
    async (dispatch, getState) => {
        const { description } = getState().todo;
        const search = description ? `&description__regex=/${description}/` : '';
        const resp = await axios.get(`${URL}?sort=-createdAt${search}`);
        dispatch ({
            type: 'TODO_SEARCHED',
            payload: resp.data
        })
    }
)

export const add = description => (
    async (dispatch) => {
        const resp = await axios.post(URL, { description });
        await dispatch({ type: 'TODO_CLEAR' });
        dispatch(search());
    }
)

export const remove = task => (
    async (dispatch) => {
        await axios.delete(`${URL}/${task._id}`);
        dispatch(search());
    }
)

export const markAsDone = task => (
    async (dispatch) => {
        await axios.put(`${URL}/${task._id}`, { done: true });
        dispatch(search());
    }
)

export const markAsPending = task => (
    async (dispatch) => {
        await axios.put(`${URL}/${task._id}`, { done: false });
        dispatch(search());
    }
)