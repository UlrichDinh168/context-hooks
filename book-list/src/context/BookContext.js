import React, { useState, createContext } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { id: 1, title: "Từ tốt đến vĩ đại ", author: "Ulrich Dinh" },
    { id: 2, title: "From good to great", author: "Carter Knight" },
  ]);

  const addBooks = (title, author) => {
    setBooks([...books, { id: uuid(), title, author }]);
  };

  const removeBooks = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{addBooks, removeBooks, books}}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
