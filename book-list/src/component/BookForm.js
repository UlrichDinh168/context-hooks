import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookForm = () => {
  // const { addBooks } = useContext(BookContext);
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // addBooks(title, author);
    dispatch({type: 'ADD_BOOK', book: {
      title, author
    }});
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        require
      />
      <input
        type="text"
        placeholder="Author..."
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        require
      />
      <input type="submit" value="Add book" />
    </form>
  );
};

export default BookForm;
