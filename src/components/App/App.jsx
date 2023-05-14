import { useSelector } from 'react-redux';
import { Form, Section, ContactList, Filter } from 'components';
import { getContacts } from 'redux/contactsSlice';

export function App() {
  const contacts = useSelector(getContacts);
  return (
    <Section>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>There is no contacts</p>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </Section>
  );
}
