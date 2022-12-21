import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contacts/operations';
import { TiDeleteOutline } from 'react-icons/ti';

export const Contacts = ({ contact }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <div className="contactsList__wrap">
        <p className="contactsList__name">{contact.name}:</p>
        <a href="tel:contact.number">{contact.number}</a>
      </div>
      <button
        className="contactsList__button"
        type="button"
        onClick={onDeleteContact}
      >
        Del
        <TiDeleteOutline style={{ verticalAlign: '-4px' }} />
      </button>
    </>
  );
};
