import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice/contactSlice';

const store = configureStore({
  reducer: {
    contactsData: contactReducer,
  },
});

export default store;
