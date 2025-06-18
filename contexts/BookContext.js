import React, { createContext, useContext, useState } from 'react';

const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks((prev) => [...prev, { ...book, id: Date.now() }]);
  };

  const markOpened = (id) => {
    setBooks((prev) => {
      const updated = prev.map((b) => (b.id === id ? { ...b, lastOpened: Date.now() } : b));
      return updated.sort((a, b) => (b.lastOpened || 0) - (a.lastOpened || 0));
    });
  };

  return (
    <BookContext.Provider value={{ books, addBook, markOpened }}>
      {children}
    </BookContext.Provider>
  );
}

export function useBooks() {
  return useContext(BookContext);
}
