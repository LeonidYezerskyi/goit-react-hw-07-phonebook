import React from 'react';
import css from './ContactList.module.css';
import ContactElement from '../ContactElement/ContactElement';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactSlice/operations';
import Loader from 'components/Loader/Loader';

const ContactList = () => {
    const { items, isLoading, error } = useSelector((state) => state.contactsData.contacts);
    const filter = useSelector((state) => state.contactsData.filter);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
        //eslint-disable-next-line
    }, [])

    const filteredContacts = items.filter(
        item => item.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <section>
            {/* {error.length > 0 && (
                <p className={css.notification}>Upss, Some error occured... {error}</p>
            )} */}
            {isLoading && <Loader />}
            <ul className={css.list}>
                {filteredContacts.map(({ id, name, number }) => {
                    return <ContactElement name={name} number={number} key={id} id={id} />
                })}
            </ul>
        </section>
    )
}

export default ContactList;