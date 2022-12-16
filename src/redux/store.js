import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './contacts';

// have to add persist and middleware and authreducer

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
