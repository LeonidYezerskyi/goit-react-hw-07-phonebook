import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';
import { fetchContacts } from 'redux/contactSlice/operations';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
        color: '#010101',
      }}
    >
      <div className={css.paper}>
        <h1 className={css.title}> Phonebook</h1>
        <ContactForm />

        <h2 className={css.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </div >
    </div >
  );
}


export { App };