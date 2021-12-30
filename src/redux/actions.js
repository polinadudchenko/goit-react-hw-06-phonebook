import { v1 as uuidv1 } from 'uuid';
import { ADD, DELETE, FILTER } from './types';

export const addContact = (name, number) => ({
    type: ADD,
    payload: {
        id: uuidv1(),
        name,
        number
    }
});

export const deleteContact = (id) => ({
    type: DELETE,
    payload: id
});

export const filter = filter => ({
    type: FILTER,
    payload: filter
});