import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookDetails = ({ books }) => {
    const {removeBooks} = useContext(BookContext)
  return (
    <li onClick={() => removeBooks(books.id) }>
      <div className="title">{books.title}</div>
      <div className="author">{books.author}</div>
    </li>
  );
};

export default BookDetails;
