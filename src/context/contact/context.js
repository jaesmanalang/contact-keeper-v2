import React, { createContext } from 'react';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const initialState = {
    contacts: [],
    filtered: null,
    loading: false,
  };

  return (
    <ContactContext.Provider value={{}}>{children}</ContactContext.Provider>
  );
};
