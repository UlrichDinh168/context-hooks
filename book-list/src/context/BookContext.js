import React, { useReducer, createContext, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  //   const [books, setBooks] = useState([
  //     { id: 1, title: "Từ tốt đến vĩ đại ", author: "Ulrich Dinh" },
  //     { id: 2, title: "From good to great", author: "Carter Knight" },
  //   ]);

  //   const addBooks = (title, author) => {
  //     setBooks([...books, { id: uuid(), title, author }]);
  //   };

  //   const removeBooks = (id) => {
  //     setBooks(books.filter((book) => book.id !== id));
  //   };

  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
