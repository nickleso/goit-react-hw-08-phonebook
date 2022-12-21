import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts, getFilter } from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';
import { Contacts } from './Contacts';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function getFiltredContacts() {
    if (!filter) {
      return contactList;
    }

    const normalizedFilter = filter.toLowerCase();

    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const visibleContacts = getFiltredContacts();

  return (
    <div className="contactsList">
      <h2 className="contactsList__title">Contacts list</h2>
      <ul className="contactsList__list">
        {visibleContacts.map(contact => (
          <li className="contactsList__item" key={contact.id}>
            <Contacts contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};
