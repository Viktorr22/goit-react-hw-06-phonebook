import {
  ContactMarkupList,
  ContactMarkupItem,
  ContactMarkupButton,
} from './Contact.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts, getFilter } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContact = () => {
    const lowerFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerFilter)
    );
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactMarkupList>
      {getFilteredContact().map(({ id, name, number }) => (
        <ContactMarkupItem key={id}>
          {name}: {number}
          <ContactMarkupButton onClick={() => onDeleteContact(id)}>
            Delete
          </ContactMarkupButton>
        </ContactMarkupItem>
      ))}
    </ContactMarkupList>
  );
};
