import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {

  const [books, setBooks] = useState([
    { id: 1, title: "numerous heroes" },
    { id: 2, title: "numerous mamas" },
    { id: 3, title: "numerous dogs" },
    { id: 4, title: "numerous monkeys" },
  ]);

  return (
    <BookContext.Provider value={{books}}>{props.children}</BookContext.Provider>
  );
};

export default BookContextProvider;
