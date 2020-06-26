import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookDetails from './BookDetails'

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <BookDetails books={book} key={book.id} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">You dont have any books to read at the moment</div>
  );
};

export default BookList;
