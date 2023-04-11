import React from 'react';
import { useSelector } from 'react-redux';
// import { Contacts } from './ContactsList.styled';
import { ContactsListItem } from '../ContactsListItem/ContactsListItem';

const ContactsList = () => {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.filter.filter);
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return contacts.length === 0 ? (
    `No contacts yet`
  ) : visibleContacts.length === 0 ? (
    `No matches founded`
  ) : (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactsListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactsList;