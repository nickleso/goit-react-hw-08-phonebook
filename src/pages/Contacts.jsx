import { ContactForm } from '../components/ContactForm';
import { ContactList } from '../components/ContactList';
import { Filter } from '../components/Filter';
import css from '../components/App.module.scss';

const Contacts = () => {
  return (
    <>
      <main className={css.phonebook}>
        <div className={css.container}>
          <section className={css.phonebook__wrap}>
            <h1 className={css.phonebook__title}>Phonebook</h1>
            <ContactForm />
          </section>
        </div>

        <div className={css.container}>
          <section className={css.contacts__wrap}>
            <h2 className={css.phonebook__title}>Contacts</h2>
            <Filter />
          </section>
        </div>

        <div className={css.container}>
          <ContactList />
        </div>
      </main>
    </>
  );
};

export default Contacts;
