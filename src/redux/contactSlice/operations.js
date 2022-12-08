import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addNewContact,
  deleteSelectedContact,
  getAllContacts,
} from 'services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const contacts = await getAllContacts();
      return contacts;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const addContactRequest = createAsyncThunk(
  'contacts/addContact',
  async (contactId, thunkApi) => {
    try {
      const contacts = await addNewContact(contactId);
      return contacts;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const deleteContactRequest = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const contacts = await deleteSelectedContact(contactId);
      return contacts;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
