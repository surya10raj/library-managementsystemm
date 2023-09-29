import React from 'react';

function BookList({ books }) {
  return (
    <ul>
      {books.map((book, index) => (
        <li key={index}>
          {book.title} by {book.author} {book.borrowedBy && `(Borrowed by ${book.borrowedBy})`}
        </li>
      ))}
    </ul>
  );
}

export default BookList;
