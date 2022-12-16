import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import css from './App.module.css';
import Home from 'pages/Home';
import Layout from 'pages/Layout';
import Register from 'pages/Register';
import Login from 'pages/Login';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* <main className={css.phonebook}>
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
        </main> */}
      </Routes>
    </>
  );
}
