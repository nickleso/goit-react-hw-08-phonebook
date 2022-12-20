import { useSelector, useDispatch } from 'react-redux';
import { filterContacts, getContacts } from '../redux/contacts';

export const Filter = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(getContacts);

  function onFilterChange(event) {
    const name = event.currentTarget.value;
    dispatch(filterContacts(name));
  }

  return (
    <div className="filter">
      <h2 className="filter__title">Filter contacts</h2>
      <div className="filter__bcg"></div>
      <div className="filter__form">
        <label className="filter__label">
          Find contacts by name
          <input
            className="filter__input"
            name="filter"
            onChange={onFilterChange}
          ></input>
        </label>
        <p className="filter__descr">Total contacts: {contactList.length}</p>
      </div>
    </div>
  );
};
