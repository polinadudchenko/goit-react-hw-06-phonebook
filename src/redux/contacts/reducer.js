import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts} from './actions'

const contacts = createReducer([], {
  [addContact]: (state, { payload }) => {
            return [...state, payload]
  },
  [deleteContact]: (state, { payload }) => state.filter(({id}) => id !== payload)
})

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload
})

export default combineReducers({
  contacts,
  filter,
});