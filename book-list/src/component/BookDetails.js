import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookDetails = ({ books }) => {
    // const {removeBooks} = useContext(BookContext)
    const {dispatch} = useContext(BookContext)
  return (
    // <li onClick={() => removeBooks(books.id) }>
    <li onClick={() => dispatch({type: 'REMOVE_BOOK', id: books.id}) }>
      <div className="title">{books.title}</div>
      <div className="author">{books.author}</div>
    </li>
  );
};

export default BookDetails;
