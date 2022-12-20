import { ContactForm } from '../components/ContactForm';
import { ContactList } from '../components/ContactList';
import { Filter } from '../components/Filter';

const Contacts = () => {
  return (
    <>
      <main>
        <section className="section">
          <div className="container phonebook">
            <h1 className="hidden">Phonebook</h1>
            <ContactForm />
            <Filter />
            <ContactList />
          </div>
        </section>
      </main>
    </>
  );
};

export default Contacts;
