import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const changeDescription = e => ({
    type: 'DESCRIPTION_CHANGED',
    payload: e.target.value
});

export const search = description => {
    const search = description ? `&description__regex=/${description}/` : '';
    const request = axios.get(`${URL}?sort=-createdAt${search}`);
    
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

export const add = description => (
    async (dispatch) => {
        const resp = await axios.post(URL, { description });
        await dispatch({
            type: 'TODO_ADDED',
            payload: resp.data
        });
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