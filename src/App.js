import { useEffect, useState, useMemo } from 'react';
import { connect } from 'react-redux';
//import { v1 as uuidv1 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import debounce from 'lodash.debounce';
import 'react-toastify/dist/ReactToastify.css';
import { DELETE } from './redux/types';
import s from './App.module.css';
import { useLocalStorage } from './utils/hooks/useLocalStorage';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter'
import Section from './components/Section'


function App({contacts}) {
  /* const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState(''); */

 /*  const onHandlerSubmit = (name, number) => {
    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      return toast.info('This contact already in the addressbook')
    }
    setContacts((contacts) => ([...contacts, { id: uuidv1(), name, number}]))
  } */
/* 
  const handleFilter = (e) => {
    setFilter(e.currentTarget.value)
  } */
  
 /*  const filterContacts = () => {
    const filteredContacts = contacts.filter(contact => (contact.name.toLowerCase().includes(filter.toLowerCase())))
    return filteredContacts;
  } */
  
  /* useEffect(() => {
    (filterContacts().length === 0 && contacts.length) && debouncedFilterAlert()
    return () => {
      debouncedFilterAlert.cancel();
    }
  }, [filter]) */
  
 /*  const deleteContact = (contactId) => {
    setContacts(contacts => (contacts.filter(contact => contact.id !== contactId)))
  } */

  /* const debouncedFilterAlert = useMemo(
    () => debounce(() => toast.error('No matches are found'), 700),[]); */

  return (
      <div className={s.App}>
        <h1 className={s.App_title}>Phonebook</h1>
        <div className={s.App_content}>
        <Section title="Create a new Contact">
        <ContactForm/>
        </Section>
       
        <Section title="Your contacts">
          {contacts.length === 0 ?
            <p>You don't have any contacts yet, please add one to the form on the left</p>
            :
            <>
            <Filter/>
            {!(contacts.length === 0)
              &&
              <ContactList /> 
            }
            </>
          }
        </Section>
        <ToastContainer autoClose={3000}/>
        </div>
    </div>
  )
}

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts, filter }) => ({
  contacts: getVisibleContacts(contacts, filter),
});

export default connect(mapStateToProps)(App);

