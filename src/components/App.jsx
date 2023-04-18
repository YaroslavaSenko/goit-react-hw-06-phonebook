// import { useEffect, useState } from "react";
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
// import { nanoid } from 'nanoid';
import { Contacts } from './App.styled';

export const App = () => {
  return (
    <Contacts>
      <h1>Phonebook</h1>
    

      <ContactForm />

      <h2>Contacts</h2>
      <Filter />

      <ContactList />
    </Contacts>
  );
};
