import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid';
import {Formik, ErrorMessage } from 'formik';
import {Form, Button} from './ContactForm.styled';

import { addContact, resetInput } from "../../redux/contactsSlice";

export default function ContactForm() {
  const contacts = useSelector( state => state.phonebook.contacts)

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const contact = {
      id: nanoid(),
      name,
      number,
    };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts.`);
    }

    dispatch(addContact(contact));
    dispatch(resetInput());
    // form.reset()
    
  };
  return (
    <Formik >
      <Form onSubmit={handleSubmit}>
<label>
<h3>Name</h3>
<input
             type="text"
             name="name"
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
             required
                         
           />
           <ErrorMessage name="name" />
            </label>
            <label >
                <h3>Number</h3>
                <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <ErrorMessage name="number" />
            </label>
            <br />
            <Button 
           type="submit">
               Add contact
           </Button>

         </Form>
         </Formik>
  );
};



